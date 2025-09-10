import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cbbknnqxkywwyvwvjdhe.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNiYmtubnF4a3l3d3l2d3ZqZGhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcyODA3NjIsImV4cCI6MjA3Mjg1Njc2Mn0.9bRFgxVxYe0ElWa9DRjelb7L1VyDR-ZOnmUttXxTjZ8';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
