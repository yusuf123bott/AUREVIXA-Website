import { supabase } from '../lib/supabase'

export const contactService = {
  submitMessage: async (data) => {
    const { data: result, error } = await supabase
      .from('contact_messages')
      .insert([
        {
          name: data.name,
          email: data.email,
          message: data.message,
        }
      ])

    if (error) {
      throw new Error(error.message)
    }
    return result
  }
}
