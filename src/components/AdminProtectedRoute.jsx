import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAdminAuth } from '../context/AdminAuthContext'

export default function AdminProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAdminAuth()

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: '#0c0d0d',
      }}>
        <div style={{
          color: '#cdb17f',
          fontSize: '18px',
          fontFamily: 'Georgia, serif',
        }}>
          Loading...
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />
  }

  return children
}
