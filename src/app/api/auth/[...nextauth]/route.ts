import NextAuth from 'next-auth';
import { authOptions } from '@/features/auth/services';

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
