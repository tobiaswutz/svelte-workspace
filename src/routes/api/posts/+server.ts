import type { User } from '@prisma/client';

export const GET = ({ request }: { request: Request }) => {
    const authHeader = request.headers.get('Authorization');

    console.log('authHeader', authHeader);
    

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return new Response(JSON.stringify({ message: 'No authorization header' }), { status: 401 });
    }



    return new Response(JSON.stringify({ message: 'Hello world! judas' }), { status: 200 });
};