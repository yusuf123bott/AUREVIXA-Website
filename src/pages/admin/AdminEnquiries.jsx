import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import './admin.css'

export default function AdminEnquiries() {
  const [enquiries, setEnquiries] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        let query = supabase.from('restaurant_enquiries').select('*').order('created_at', { ascending: false })
        
        if (filter !== 'all') {
          query = query.eq('status', filter)
        }

        const { data, error } = await query
        if (error) throw error
        setEnquiries(data || [])
      } catch (error) {
        console.error('Failed to fetch enquiries:', error)
      } finally {
        setLoading(false)
      }
    }

    setLoading(true)
    fetchEnquiries()
  }, [filter])

  const handleStatusChange = async (id, newStatus) => {
    try {
      const { error } = await supabase
        .from('restaurant_enquiries')
        .update({ status: newStatus })
        .eq('id', id)

      if (error) throw error

      setEnquiries(enquiries.map(e =>
        e.id === id ? { ...e, status: newStatus } : e
      ))
    } catch (error) {
      console.error('Failed to update status:', error)
      alert('Failed to update status')
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this enquiry?')) return

    try {
      const { error } = await supabase
        .from('restaurant_enquiries')
        .delete()
        .eq('id', id)

      if (error) throw error
      setEnquiries(enquiries.filter(e => e.id !== id))
    } catch (error) {
      console.error('Failed to delete enquiry:', error)
      alert('Failed to delete enquiry')
    }
  }

  return (
    <div className="admin-page">
      <header className="admin-page-header">
        <h1>Restaurant Enquiries</h1>
        <Link to="/admin/dashboard" className="admin-button admin-button-outline">
          ← Back
        </Link>
      </header>

      <div className="admin-filter">
        <select value={filter} onChange={(e) => setFilter(e.target.value)} className="admin-select">
          <option value="all">All Enquiries</option>
          <option value="new">New</option>
          <option value="contacted">Contacted</option>
          <option value="in_progress">In Progress</option>
          <option value="closed">Closed</option>
        </select>
      </div>

      {loading ? (
        <p className="admin-loading">Loading enquiries...</p>
      ) : enquiries.length === 0 ? (
        <p className="admin-empty">No enquiries found.</p>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Restaurant</th>
              <th>Email</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {enquiries.map(enquiry => (
              <tr key={enquiry.id}>
                <td>{enquiry.name}</td>
                <td>{enquiry.restaurant_name}</td>
                <td>{enquiry.email}</td>
                <td>{new Date(enquiry.created_at).toLocaleDateString()}</td>
                <td>
                  <select
                    value={enquiry.status}
                    onChange={(e) => handleStatusChange(enquiry.id, e.target.value)}
                    className="admin-status-select"
                  >
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="in_progress">In Progress</option>
                    <option value="closed">Closed</option>
                  </select>
                </td>
                <td>
                  <Link to={`/admin/enquiries/${enquiry.id}`} className="admin-link-button">
                    View
                  </Link>
                  <button
                    onClick={() => handleDelete(enquiry.id)}
                    className="admin-button admin-button-delete"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
