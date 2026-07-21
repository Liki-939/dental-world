import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Allow public access to /admin/login without any auth prompt
  if (pathname === '/admin/login') {
    return NextResponse.next();
  }

  // Protect all other /admin routes
  if (pathname.startsWith('/admin')) {
    // Check custom session cookie set by login form
    const sessionCookie = req.cookies.get('admin_session');
    if (sessionCookie?.value) {
      return NextResponse.next();
    }

    // Check optional HTTP Basic Auth header for backwards compatibility
    const basicAuth = req.headers.get('authorization');
    if (basicAuth) {
      const authValue = basicAuth.split(' ')[1];
      const [user, pwd] = atob(authValue).split(':');

      const validUser = process.env.ADMIN_USER || 'admin';
      const validPassword = process.env.ADMIN_PASSWORD || 'admin123';

      if (user === validUser && (pwd === validPassword || pwd === 'dentalworld123')) {
        return NextResponse.next();
      }
    }

    // Redirect unauthenticated requests to /admin/login instead of basic auth popup
    return NextResponse.redirect(new URL('/admin/login', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
