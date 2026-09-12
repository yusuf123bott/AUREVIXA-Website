import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import './admin.css'

export default function AdminApplicationDetail() {
  const { id } = useParams()
  const [app, setApp] = useState(null)
  const [loading, setLoading] = useState(true)
  const [notes, setNotes] = useState('')
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    const fetchApplication = async () => {
      try {
        const { data, error } = await supabase
          .from('creator_applications')
          .select('*')
          .eq('id', id)
          .single()

        if (error) throw error
        setApp(data)
        setNotes(data.notes || '')
      } catch (error) {
        console.error('Failed to fetch application:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchApplication()
  }, [id])

  const handleStatusChange = async (newStatus) => {
    try {
      const { error } = await supabase
        .from('creator_applications')
        .update({ status: newStatus })
        .eq('id', id)

      if (error) throw error
      setApp({ ...app, status: newStatus })
    } catch (error) {
      console.error('Failed to update status:', error)
      alert('Failed to update status')
    }
  }

  const handleSaveNotes = async () => {
    setSaving(true)
    try {
      const { error } = await supabase
        .from('creator_applications')
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
  if (!app) return <div className="admin-page"><p>Application not found</p></div>

  return (
    <div className="admin-page">
      <header className="admin-page-header">
        <h1>Application Details</h1>
        <Link to="/admin/applications" className="admin-button admin-button-outline">
          ← Back
        </Link>
      </header>

      <div className="admin-detail-container">
        <section className="admin-detail-section">
          <h2>Applicant Information</h2>
          <div className="admin-detail-row">
            <label>Name:</label>
            <p>{app.name}</p>
          </div>
          <div className="admin-detail-row">
            <label>Email:</label>
            <p>{app.email}</p>
          </div>
          <div className="admin-detail-row">
            <label>Instagram:</label>
            <p><a href={app.instagram_url} target="_blank" rel="noopener noreferrer">{app.instagram_url}</a></p>
          </div>
          <div className="admin-detail-row">
            <label>Location:</label>
            <p>{app.location || 'Not provided'}</p>
          </div>
          <div className="admin-detail-row">
            <label>Content Category:</label>
            <p>{app.content_category}</p>
          </div>
          <div className="admin-detail-row">
            <label>Follower Range:</label>
            <p>{app.follower_range || 'Not provided'}</p>
          </div>
          <div className="admin-detail-row">
            <label>Date Applied:</label>
            <p>{new Date(app.created_at).toLocaleString()}</p>
          </div>
          <div className="admin-detail-row">
            <label>Status:</label>
            <select
              value={app.status}
              onChange={(e) => handleStatusChange(e.target.value)}
              className="admin-status-select"
            >
              <option value="new">New</option>
              <option value="reviewed">Reviewed</option>
              <option value="accepted">Accepted</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </section>

        <section className="admin-detail-section">
          <h2>Application Message</h2>
          <div className="admin-detail-message">{app.application_message || 'No message provided'}</div>
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
