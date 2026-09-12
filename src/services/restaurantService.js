import { supabase } from '../lib/supabase'

export const restaurantService = {
  submitEnquiry: async (data) => {
    const { data: result, error } = await supabase
      .from('restaurant_enquiries')
      .insert([
        {
          name: data.contactName,
          restaurant_name: data.restaurantName,
          email: data.email,
          phone: data.phone || null,
          campaign_type: data.campaign_type || null,
          campaign_details: data.message,
        }
      ])

    if (error) {
      throw new Error(error.message)
    }
    return result
  }
}
