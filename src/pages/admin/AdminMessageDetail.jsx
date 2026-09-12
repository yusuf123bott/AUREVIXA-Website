import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import './admin.css'

export default function AdminMessageDetail() {
  const { id } = useParams()
  const [message, setMessage] = useState(null)
  const [loading, setLoading] = useState(true)
  const [notes, setNotes] = useState('')
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const { data, error } = await supabase
          .from('contact_messages')
          .select('*')
          .eq('id', id)
          .single()

        if (error) throw error
        setMessage(data)
        setNotes(data.notes || '')
      } catch (error) {
        console.error('Failed to fetch message:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchMessage()
  }, [id])

  const handleStatusChange = async (newStatus) => {
    try {
      const { error } = await supabase
        .from('contact_messages')
        .update({ status: newStatus })
        .eq('id', id)

      if (error) throw error
      setMessage({ ...message, status: newStatus })
    } catch (error) {
      console.error('Failed to update status:', error)
      alert('Failed to update status')
    }
  }

  const handleSaveNotes = async () => {
    setSaving(true)
    try {
      const { error } = await supabase
        .from('contact_messages')
        .update({ notes })
        .eq('id', id)

      if (error) throw error
      alert('Notes saved successfully')
    } catch (error) {
      console.error('Failed to save notes:', error)
      alert('Failed to save notes')
    } finally {
      setSaving(false)
    }
  }

  if (loading) return <div className="admin-page"><p>Loading...</p></div>
  if (!message) return <div className="admin-page"><p>Message not found</p></div>

  return (
    <div className="admin-page">
      <header className="admin-page-header">
        <h1>Message Details</h1>
        <Link to="/admin/messages" className="admin-button admin-button-outline">
          ← Back
        </Link>
      </header>

      <div className="admin-detail-container">
        <section className="admin-detail-section">
          <h2>Message Information</h2>
          <div className="admin-detail-row">
            <label>From:</label>
            <p>{message.name} ({message.email})</p>
          </div>
          <div className="admin-detail-row">
            <label>Date:</label>
            <p>{new Date(message.created_at).toLocaleString()}</p>
          </div>
          <div className="admin-detail-row">
            <label>Status:</label>
            <select
              value={message.status}
              onChange={(e) => handleStatusChange(e.target.value)}
              className="admin-status-select"
            >
              <option value="new">New</option>
              <option value="read">Read</option>
              <option value="replied">Replied</option>
            </select>
          </div>
        </section>

        <section className="admin-detail-section">
          <h2>Message</h2>
          <div className="admin-detail-message">{message.message}</div>
        </section>

        <section className="admin-detail-section">
          <h2>Internal Notes</h2>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Add internal notes here..."
            className="admin-textarea"
            rows="6"
          />
          <button
            onClick={handleSaveNotes}
            disabled={saving}
            className="admin-button admin-button-primary"
          >
            {saving ? 'Saving...' : 'Save Notes'}
          </button>
        </section>
      </div>
    </div>
  )
}
