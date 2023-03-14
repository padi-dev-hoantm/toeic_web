import { NextRequest, NextResponse } from "next/server";


export const middleware = (req: NextRequest) => {
    console.log('middleware')



    return NextResponse.next();
}

export const config = {
    matcher: [
      /*
       * Match all request paths except for the ones starting with:
       * - api (API routes)
       * - _next/static (static files)
       * - favicon.ico (favicon file)
       * - next image
       * - img in storage public
       */
      '/((?!api|_next/static|_next/image|favicon.ico|img).*)',
  
      /*
       * Match request from home
       */
      '/',
    ],
  };
  