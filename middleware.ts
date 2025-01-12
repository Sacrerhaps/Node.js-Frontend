import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Ana URL'ye gelen istekleri grspage'e yönlendir
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/grspage', request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: '/',
}