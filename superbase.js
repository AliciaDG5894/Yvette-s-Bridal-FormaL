const SUPABASE_URL = 'https://odlebtlesvinsfaokiiz.supabase.co'
const SUPABASE_KEY = 'sb_publishable_SozvaH9FjvRZdCTSQBhGdg_YQnPX-LT'
const { createClient } = supabase
window.supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY)
