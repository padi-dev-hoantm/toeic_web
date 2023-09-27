import { routerConstant } from '@/constant/routerConstant';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import Cookies from 'universal-cookie';
 
export function middleware(request: NextRequest) {
  const cookies = new Cookies();
  const jwt = cookies.get('jwt');

  if(!jwt){
    return NextResponse.rewrite(routerConstant.login)
  }
}