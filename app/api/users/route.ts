// import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { fetchUsers, saveUser } from '@/utils/actions';

export const GET = async (request: NextRequest) => {
    console.log(request.url);
    console.log(request.nextUrl.searchParams.get('id'));
  
    const users = await fetchUsers();
    return Response.json({ users });
 //   return NextResponse.redirect(new URL('/', request.url));
};

/*
  const GET = async (req: Request)
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    console.log(id);    
    const users = await fetchUsers();
    return Response.json({ users });
*/

export const POST = async (request: Request) => {
    const user = await request.json();
    const newUser = { ...user, id: Date.now().toString() };
    await saveUser(newUser);
    return Response.json({ msg: 'user created' });
  };