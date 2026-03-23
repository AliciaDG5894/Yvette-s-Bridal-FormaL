const SUPABASE_URL = 'https://odlebtlesvinsfaokiiz.supabase.co' // DataAPI
const SUPABASE_KEY = 'sb_publishable_SozvaH9FjvRZdCTSQBhGdg_YQnPX-LT' // API key Public

const { createClient } = supabase
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY)
