import { supabase } from '../lib/supabase'

export const adminAuthService = {
  login: async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      throw new Error(error.message)
    }

    // Verify user is an admin by attempting to read their admin record
    // RLS will prevent access if not authorized
    const { data: adminUser, error: adminError } = await supabase
      .from('admin_users')
      .select('*')
      .eq('id', data.user.id)
      .single()

    if (adminError || !adminUser) {
      // User authenticated but not in admin_users table or not authorized
      await supabase.auth.signOut()
      throw new Error('Unauthorized: Not an admin user')
    }

    return { user: data.user, adminUser }
  },

  logout: async () => {
    const { error } = await supabase.auth.signOut()
    if (error) throw new Error(error.message)
  },

  getCurrentSession: async () => {
    const { data } = await supabase.auth.getSession()
    if (!data.session) return null

    // Fetch admin_users record - RLS will block if not authorized
    const { data: adminUser, error } = await supabase
      .from('admin_users')
      .select('*')
      .eq('id', data.session.user.id)
      .single()

    if (error || !adminUser) {
      // Session exists but user is not an authorized admin
      await supabase.auth.signOut()
      return null
    }

    return { user: data.session.user, adminUser }
  },

  onAuthStateChange: (callback) => {
    return supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.user) {
        const { data: adminUser } = await supabase
          .from('admin_users')
          .select('*')
          .eq('id', session.user.id)
          .single()

        if (adminUser) {
          callback(session.user, adminUser)
        } else {
          // Not an authorized admin, sign out
          await supabase.auth.signOut()
          callback(null, null)
        }
      } else {
        callback(null, null)
      }
    })
  }
}
