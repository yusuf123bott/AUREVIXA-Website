import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import './admin.css'

export default function AdminMessages() {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        let query = supabase.from('contact_messages').select('*').order('created_at', { ascending: false })
        
        if (filter !== 'all') {
          query = query.eq('status', filter)
        }

        const { data, error } = await query
        if (error) throw error
        setMessages(data || [])
      } catch (error) {
        console.error('Failed to fetch messages:', error)
      } finally {
        setLoading(false)
      }
    }

    setLoading(true)
    fetchMessages()
  }, [filter])

  const handleStatusChange = async (id, newStatus) => {
    try {
      const { error } = await supabase
        .from('contact_messages')
        .update({ status: newStatus })
        .eq('id', id)

      if (error) throw error

      setMessages(messages.map(m =>
        m.id === id ? { ...m, status: newStatus } : m
      ))
    } catch (error) {
      console.error('Failed to update status:', error)
      alert('Failed to update status')
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this message?')) return

    try {
      const { error } = await supabase
        .from('contact_messages')
        .delete()
        .eq('id', id)

      if (error) throw error
      setMessages(messages.filter(m => m.id !== id))
    } catch (error) {
      console.error('Failed to delete message:', error)
      alert('Failed to delete message')
    }
  }

  return (
    <div className="admin-page">
      <header className="admin-page-header">
        <h1>Contact Messages</h1>
        <Link to="/admin/dashboard" className="admin-button admin-button-outline">
          ← Back
        </Link>
      </header>

      <div className="admin-filter">
        <select value={filter} onChange={(e) => setFilter(e.target.value)} className="admin-select">
          <option value="all">All Messages</option>
          <option value="new">New</option>
          <option value="read">Read</option>
          <option value="replied">Replied</option>
        </select>
      </div>

      {loading ? (
        <p className="admin-loading">Loading messages...</p>
      ) : messages.length === 0 ? (
        <p className="admin-empty">No messages found.</p>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {messages.map(msg => (
              <tr key={msg.id}>
                <td>{msg.name}</td>
                <td>{msg.email}</td>
                <td className="admin-message-preview">{msg.message.substring(0, 50)}...</td>
                <td>{new Date(msg.created_at).toLocaleDateString()}</td>
                <td>
                  <select
                    value={msg.status}
                    onChange={(e) => handleStatusChange(msg.id, e.target.value)}
                    className="admin-status-select"
                  >
                    <option value="new">New</option>
                    <option value="read">Read</option>
                    <option value="replied">Replied</option>
                  </select>
                </td>
                <td>
                  <Link to={`/admin/messages/${msg.id}`} className="admin-link-button">
                    View
                  </Link>
                  <button
                    onClick={() => handleDelete(msg.id)}
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
