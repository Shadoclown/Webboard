import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rpaualocqtiicywwsrxt.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY; // Use the environment variable
export const supabase = createClient(supabaseUrl, supabaseKey);
