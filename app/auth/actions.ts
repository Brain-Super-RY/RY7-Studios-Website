'use server'

import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
 
export async function signOut() {
  const supabase = createClient() // Reverted: removed await
  await supabase.auth.signOut()
  return redirect('/')
} 