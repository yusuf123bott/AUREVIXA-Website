import { supabase } from '../lib/supabase'

export const creatorService = {
  submitApplication: async (data) => {
    const { data: result, error } = await supabase
      .from('creator_applications')
      .insert([
        {
          name: data.fullName,
          email: data.email,
          instagram_url: data.instagram,
          location: data.location || null,
          content_category: data.niche,
          follower_range: data.follower_range || null,
          application_message: data.message || null,
        }
      ])

    if (error) {
      throw new Error(error.message)
    }
    return result
  }
}
