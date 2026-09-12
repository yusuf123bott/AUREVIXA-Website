import { useState, useEffect } from 'react'
import { useAdminAuth } from '../context/AdminAuthContext'
import { supabase } from '../lib/supabase'
import './admin.css'

export default function AdminDashboard() {
  const { adminUser, logout } = useAdminAuth()
  const [stats, setStats] = useState({
    enquiries: 0,
    applications: 0,
    messages: 0,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [enquiries, applications, messages] = await Promise.all([
          supabase.from('restaurant_enquiries').select('*', { count: 'exact', head: true }),
          supabase.from('creator_applications').select('*', { count: 'exact', head: true }),
          supabase.from('contact_messages').select('*', { count: 'exact', head: true }),
        ])

        setStats({
          enquiries: enquiries.count || 0,
          applications: applications.count || 0,
          messages: messages.count || 0,
        })
      } catch (error) {
        console.error('Failed to fetch stats:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  const handleLogout = async () => {
    try {
      await logout()
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <div className="admin-header-left">
          <h1>Dashboard</h1>
          <p>Welcome, {adminUser?.email}</p>
        </div>
        <button onClick={handleLogout} className="admin-button admin-button-outline">
          Logout
        </button>
      </header>

      <main className="admin-main">
        <section className="admin-stats">
          <div className="admin-stat-card">
            <h3>Restaurant Enquiries</h3>
            <p className="admin-stat-number">{loading ? '—' : stats.enquiries}</p>
            <a href="/admin/enquiries" className="admin-stat-link">View all →</a>
          </div>

          <div className="admin-stat-card">
            <h3>Creator Applications</h3>
            <p className="admin-stat-number">{loading ? '—' : stats.applications}</p>
            <a href="/admin/applications" className="admin-stat-link">View all →</a>
          </div>

          <div className="admin-stat-card">
            <h3>Contact Messages</h3>
            <p className="admin-stat-number">{loading ? '—' : stats.messages}</p>
            <a href="/admin/messages" className="admin-stat-link">View all →</a>
          </div>
        </section>

        <section className="admin-quick-actions">
          <h2>Quick Actions</h2>
          <div className="admin-action-grid">
            <a href="/admin/enquiries" className="admin-action-card">
              <h4>Manage Enquiries</h4>
              <p>Review and respond to restaurant enquiries</p>
            </a>
            <a href="/admin/applications" className="admin-action-card">
              <h4>Review Applications</h4>
              <p>Review creator applications and manage status</p>
            </a>
            <a href="/admin/messages" className="admin-action-card">
              <h4>View Messages</h4>
              <p>Read contact form submissions</p>
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}
