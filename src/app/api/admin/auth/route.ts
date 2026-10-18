import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: NextRequest) {
  try {
    const { token } = await request.json();
    const secret = process.env.ADMIN_SECRET_TOKEN;

    if (!secret) {
      console.error('ADMIN_SECRET_TOKEN is not configured on server.');
      return NextResponse.json(
        { success: false, message: 'Admin authentication is not configured on the server.' },
        { status: 500 }
      );
    }

    if (!token || token.trim() !== secret.trim()) {
      return NextResponse.json(
        { success: false, message: 'Invalid Admin Secret Token' },
        { status: 401 }
      );
    }

    // Set cookie
    const cookieStore = cookies();
    cookieStore.set('admin_session', 'authenticated_takeway_admin', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}
