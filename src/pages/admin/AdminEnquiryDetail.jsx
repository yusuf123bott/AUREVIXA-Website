import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import './admin.css'

export default function AdminEnquiryDetail() {
  const { id } = useParams()
  const [enquiry, setEnquiry] = useState(null)
  const [loading, setLoading] = useState(true)
  const [notes, setNotes] = useState('')
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    const fetchEnquiry = async () => {
      try {
        const { data, error } = await supabase
          .from('restaurant_enquiries')
          .select('*')
          .eq('id', id)
          .single()

        if (error) throw error
        setEnquiry(data)
        setNotes(data.notes || '')
      } catch (error) {
        console.error('Failed to fetch enquiry:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchEnquiry()
  }, [id])

  const handleStatusChange = async (newStatus) => {
    try {
      const { error } = await supabase
        .from('restaurant_enquiries')
        .update({ status: newStatus })
        .eq('id', id)

      if (error) throw error
      setEnquiry({ ...enquiry, status: newStatus })
    } catch (error) {
      console.error('Failed to update status:', error)
      alert('Failed to update status')
    }
  }

  const handleSaveNotes = async () => {
    setSaving(true)
    try {
      const { error } = await supabase
        .from('restaurant_enquiries')
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
  if (!enquiry) return <div className="admin-page"><p>Enquiry not found</p></div>

  return (
    <div className="admin-page">
      <header className="admin-page-header">
        <h1>Enquiry Details</h1>
        <Link to="/admin/enquiries" className="admin-button admin-button-outline">
          ← Back
        </Link>
      </header>

      <div className="admin-detail-container">
        <section className="admin-detail-section">
          <h2>Contact Information</h2>
          <div className="admin-detail-row">
            <label>Contact Name:</label>
            <p>{enquiry.name}</p>
          </div>
          <div className="admin-detail-row">
            <label>Restaurant Name:</label>
            <p>{enquiry.restaurant_name}</p>
          </div>
          <div className="admin-detail-row">
            <label>Email:</label>
            <p>{enquiry.email}</p>
          </div>
          <div className="admin-detail-row">
            <label>Phone:</label>
            <p>{enquiry.phone || 'Not provided'}</p>
          </div>
          <div className="admin-detail-row">
            <label>Campaign Type:</label>
            <p>{enquiry.campaign_type || 'Not specified'}</p>
          </div>
          <div className="admin-detail-row">
            <label>Date Submitted:</label>
            <p>{new Date(enquiry.created_at).toLocaleString()}</p>
          </div>
          <div className="admin-detail-row">
            <label>Status:</label>
            <select
              value={enquiry.status}
              onChange={(e) => handleStatusChange(e.target.value)}
              className="admin-status-select"
            >
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="in_progress">In Progress</option>
              <option value="closed">Closed</option>
            </select>
          </div>
        </section>

        <section className="admin-detail-section">
          <h2>Campaign Details</h2>
          <div className="admin-detail-message">{enquiry.campaign_details}</div>
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
