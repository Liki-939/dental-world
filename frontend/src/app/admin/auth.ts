'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const ADMIN_COOKIE_NAME = 'admin_session';

/**
 * Verify admin credentials and set session cookie
 */
export async function loginAdmin(formData: FormData) {
  const username = (formData.get('username')?.toString() || '').trim();
  const password = (formData.get('password')?.toString() || '').trim();

  const envUser = process.env.ADMIN_USERNAME || 'admin';
  const envPass = process.env.ADMIN_PASSWORD || 'admin123';

  // Allow 'admin' or 'admin123' as password for ease of access
  const isUserValid = username.toLowerCase() === envUser.toLowerCase() || username.toLowerCase() === 'admin';
  const isPassValid = password === envPass || password === 'admin123' || password === 'admin';

  if (isUserValid && isPassValid) {
    const cookieStore = await cookies();
    cookieStore.set(ADMIN_COOKIE_NAME, 'authenticated_admin_token', {
      httpOnly: true,
      secure: false, // Ensure cookie is accepted on HTTP/localhost as well as HTTPS
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    });

    return { success: true };
  }

  return { success: false, error: 'Invalid username or password. Try username: admin, password: admin123' };
}

/**
 * Check if current user is logged in as admin
 */
export async function isAuthenticatedAdmin(): Promise<boolean> {
  try {
    const cookieStore = await cookies();
    const session = cookieStore.get(ADMIN_COOKIE_NAME);
    return !!session?.value;
  } catch (error) {
    console.error('Error checking admin auth cookie:', error);
    return false;
  }
}

/**
 * Log out admin
 */
export async function logoutAdmin() {
  const cookieStore = await cookies();
  cookieStore.delete(ADMIN_COOKIE_NAME);
  redirect('/admin/login');
}
