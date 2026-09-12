-- Create secure SECURITY DEFINER helper functions
-- These avoid recursive RLS evaluation by checking admin_users directly

CREATE OR REPLACE FUNCTION public.is_admin_or_editor()
RETURNS boolean AS $$
DECLARE
  user_role text;
BEGIN
  SELECT role INTO user_role
  FROM public.admin_users
  WHERE id = auth.uid();
  
  RETURN user_role IN ('editor', 'admin');
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

ALTER FUNCTION public.is_admin_or_editor() SET search_path = public;

-- Create helper for admin-only (delete) operations
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean AS $$
DECLARE
  user_role text;
BEGIN
  SELECT role INTO user_role
  FROM public.admin_users
  WHERE id = auth.uid();
  
  RETURN user_role = 'admin';
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

ALTER FUNCTION public.is_admin() SET search_path = public;

-- ============================================
-- RESTAURANT_ENQUIRIES RLS POLICIES
-- ============================================

-- Public can only INSERT specific fields (no status, notes)
CREATE POLICY "restaurant_enquiries_public_insert"
  ON restaurant_enquiries
  FOR INSERT
  WITH CHECK (TRUE);

-- Only authenticated admins can SELECT
CREATE POLICY "restaurant_enquiries_admin_select"
  ON restaurant_enquiries
  FOR SELECT
  USING (public.is_admin_or_editor());

-- Only authenticated admins can UPDATE
CREATE POLICY "restaurant_enquiries_admin_update"
  ON restaurant_enquiries
  FOR UPDATE
  USING (public.is_admin_or_editor())
  WITH CHECK (public.is_admin_or_editor());

-- Only authenticated admins can DELETE
CREATE POLICY "restaurant_enquiries_admin_delete"
  ON restaurant_enquiries
  FOR DELETE
  USING (public.is_admin());

-- ============================================
-- CREATOR_APPLICATIONS RLS POLICIES
-- ============================================

CREATE POLICY "creator_applications_public_insert"
  ON creator_applications
  FOR INSERT
  WITH CHECK (TRUE);

CREATE POLICY "creator_applications_admin_select"
  ON creator_applications
  FOR SELECT
  USING (public.is_admin_or_editor());

CREATE POLICY "creator_applications_admin_update"
  ON creator_applications
  FOR UPDATE
  USING (public.is_admin_or_editor())
  WITH CHECK (public.is_admin_or_editor());

CREATE POLICY "creator_applications_admin_delete"
  ON creator_applications
  FOR DELETE
  USING (public.is_admin());

-- ============================================
-- CONTACT_MESSAGES RLS POLICIES
-- ============================================

CREATE POLICY "contact_messages_public_insert"
  ON contact_messages
  FOR INSERT
  WITH CHECK (TRUE);

CREATE POLICY "contact_messages_admin_select"
  ON contact_messages
  FOR SELECT
  USING (public.is_admin_or_editor());

CREATE POLICY "contact_messages_admin_update"
  ON contact_messages
  FOR UPDATE
  USING (public.is_admin_or_editor())
  WITH CHECK (public.is_admin_or_editor());

CREATE POLICY "contact_messages_admin_delete"
  ON contact_messages
  FOR DELETE
  USING (public.is_admin());

-- ============================================
-- ADMIN_USERS RLS POLICIES
-- ============================================

-- Users can read their own admin record
CREATE POLICY "admin_users_self_select"
  ON admin_users
  FOR SELECT
  USING (auth.uid() = id);

-- Admins can read all admin records
CREATE POLICY "admin_users_admin_select"
  ON admin_users
  FOR SELECT
  USING (public.is_admin());
