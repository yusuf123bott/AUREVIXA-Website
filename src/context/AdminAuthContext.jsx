import React, { createContext, useContext, useState, useEffect } from 'react'
import { adminAuthService } from '../services/adminAuthService'

const AdminAuthContext = createContext(null)

export function AdminAuthProvider({ children }) {
  const [adminUser, setAdminUser] = useState(null)
  const [authUser, setAuthUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Initialize session on mount
  useEffect(() => {
    const initializeSession = async () => {
      try {
        const session = await adminAuthService.getCurrentSession()
        if (session) {
          setAuthUser(session.user)
          setAdminUser(session.adminUser)
        }
      } catch (err) {
        console.error('Failed to restore session:', err)
      } finally {
        setLoading(false)
      }
    }

    initializeSession()

    // Subscribe to auth state changes
    const { data: { subscription } } = {
      data: {
        subscription: adminAuthService.onAuthStateChange((user, admin) => {
          setAuthUser(user)
          setAdminUser(admin)
        })
      }
    }

    return () => {
      subscription?.unsubscribe()
    }
  }, [])

  const login = async (email, password) => {
    setError(null)
    try {
      const result = await adminAuthService.login(email, password)
      setAuthUser(result.user)
      setAdminUser(result.adminUser)
      return result
    } catch (err) {
      setError(err.message)
      throw err
    }
  }

  const logout = async () => {
    setError(null)
    try {
      await adminAuthService.logout()
      setAuthUser(null)
      setAdminUser(null)
    } catch (err) {
      setError(err.message)
      throw err
    }
  }

  const isAuthenticated = !!authUser && !!adminUser
  const isAdmin = adminUser?.role === 'admin'
  const isEditor = adminUser?.role === 'editor'

  return (
    <AdminAuthContext.Provider
      value={{
        authUser,
        adminUser,
        loading,
        error,
        isAuthenticated,
        isAdmin,
        isEditor,
        login,
        logout,
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  )
}

export function useAdminAuth() {
  const context = useContext(AdminAuthContext)
  if (!context) {
    throw new Error('useAdminAuth must be used within AdminAuthProvider')
  }
  return context
}
