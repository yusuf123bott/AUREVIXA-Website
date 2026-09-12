import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import './admin.css'

export default function AdminApplications() {
  const [applications, setApplications] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        let query = supabase.from('creator_applications').select('*').order('created_at', { ascending: false })
        
        if (filter !== 'all') {
          query = query.eq('status', filter)
        }

        const { data, error } = await query
        if (error) throw error
        setApplications(data || [])
      } catch (error) {
        console.error('Failed to fetch applications:', error)
      } finally {
        setLoading(false)
      }
    }

    setLoading(true)
    fetchApplications()
  }, [filter])

  const handleStatusChange = async (id, newStatus) => {
    try {
      const { error } = await supabase
        .from('creator_applications')
        .update({ status: newStatus })
        .eq('id', id)

      if (error) throw error

      setApplications(applications.map(a =>
        a.id === id ? { ...a, status: newStatus } : a
      ))
    } catch (error) {
      console.error('Failed to update status:', error)
      alert('Failed to update status')
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this application?')) return

    try {
      const { error } = await supabase
        .from('creator_applications')
        .delete()
        .eq('id', id)

      if (error) throw error
      setApplications(applications.filter(a => a.id !== id))
    } catch (error) {
      console.error('Failed to delete application:', error)
      alert('Failed to delete application')
    }
  }

  return (
    <div className="admin-page">
      <header className="admin-page-header">
        <h1>Creator Applications</h1>
        <Link to="/admin/dashboard" className="admin-button admin-button-outline">
          ← Back
        </Link>
      </header>

      <div className="admin-filter">
        <select value={filter} onChange={(e) => setFilter(e.target.value)} className="admin-select">
          <option value="all">All Applications</option>
          <option value="new">New</option>
          <option value="reviewed">Reviewed</option>
          <option value="accepted">Accepted</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>

      {loading ? (
        <p className="admin-loading">Loading applications...</p>
      ) : applications.length === 0 ? (
        <p className="admin-empty">No applications found.</p>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Category</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.map(app => (
              <tr key={app.id}>
                <td>{app.name}</td>
                <td>{app.email}</td>
                <td>{app.content_category}</td>
                <td>{new Date(app.created_at).toLocaleDateString()}</td>
                <td>
                  <select
                    value={app.status}
                    onChange={(e) => handleStatusChange(app.id, e.target.value)}
                    className="admin-status-select"
                  >
                    <option value="new">New</option>
                    <option value="reviewed">Reviewed</option>
                    <option value="accepted">Accepted</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </td>
                <td>
                  <Link to={`/admin/applications/${app.id}`} className="admin-link-button">
                    View
                  </Link>
                  <button
                    onClick={() => handleDelete(app.id)}
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
