import { createClient } from '@supabase/supabase-js'
 const supabaseUrl = 'https://ebtuxbnxrgdryhsmjret.supabase.co'
 const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVidHV4Ym54cmdkcnloc21qcmV0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYyODAzMTMsImV4cCI6MjA5MTg1NjMxM30.LtpaKSs-9zHUSoD-QV-wQhymBjaIC3PFOZ5Wet7y-bk'
 export const supabase = createClient(supabaseUrl, supabaseKey)