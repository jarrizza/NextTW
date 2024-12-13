
//import { NextResponse } from 'next/server';


export const config = {
    matcher: ['/about/:path*', '/tours/:path*']
}

export function middleware(request: Request) {
    console.log(request.url);
    //return NextResponse.redirect(new URL('/', request.url));
}