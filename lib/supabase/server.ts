import { createClient, type User } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !serviceRoleKey || !anonKey) {
  throw new Error('Missing Supabase env vars (NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, NEXT_PUBLIC_SUPABASE_ANON_KEY)')
}

/** Use in API routes to insert/update/delete (bypasses RLS). Never expose to the client. */
export function createAdminClient() {
  return createClient(supabaseUrl!, serviceRoleKey!)
}

/** Get the authenticated user from the request's Authorization: Bearer <token> header. */
export async function getUserFromRequest(request: Request): Promise<User | null> {
  const authHeader = request.headers.get('Authorization')
  const token = authHeader?.startsWith('Bearer ') ? authHeader.slice(7) : null
  if (!token) return null

  const client = createClient(supabaseUrl!, anonKey!)
  const { data: { user }, error } = await client.auth.getUser(token)
  if (error || !user) return null
  return user
}
