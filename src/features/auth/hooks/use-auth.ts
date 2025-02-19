import { useState } from 'react';
import { signIn as nextAuthSignIn } from 'next-auth/react';
import { SignInCredentials } from '../types';

export function useAuth() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const signIn = async (credentials: SignInCredentials) => {
    try {
      setIsLoading(true);
      setError(null);
      
      const result = await nextAuthSignIn('credentials', {
        ...credentials,
        redirect: false,
      });
      
      if (!result?.ok) {
        throw new Error(result?.error || 'Failed to sign in');
      }
      
      return result;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    signIn,
    isLoading,
    error,
  };
}
