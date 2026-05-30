import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  // Only protect the /admin routes
  if (req.nextUrl.pathname.startsWith('/admin')) {
    const basicAuth = req.headers.get('authorization');
    
    // Check if the auth header is present
    if (basicAuth) {
      const authValue = basicAuth.split(' ')[1];
      const [user, pwd] = atob(authValue).split(':');

      // Default credentials for now: admin / dentalworld123
      const validUser = process.env.ADMIN_USER || 'admin';
      const validPassword = process.env.ADMIN_PASSWORD || 'dentalworld123';

      if (user === validUser && pwd === validPassword) {
        return NextResponse.next();
      }
    }

    // Return a 401 response with the WWW-Authenticate header to prompt for credentials
    return new NextResponse('Auth required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"',
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
