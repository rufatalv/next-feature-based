import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        // This is where you would typically validate against your database
        // For demo purposes, we'll just check for a demo user
        if (
          credentials?.email === 'user@example.com' &&
          credentials?.password === 'password'
        ) {
          return {
            id: '1',
            name: 'Demo User',
            email: 'user@example.com',
          };
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/auth/signin',
  },
};
