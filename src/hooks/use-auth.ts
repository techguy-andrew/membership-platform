import { useState, useEffect, useCallback } from 'react';
import { useLocalStorage } from './use-local-storage';

interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export function useAuth() {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  });
  const [token, setToken] = useLocalStorage<string | null>('auth-token', null);

  const logout = useCallback(() => {
    setToken(null);
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
    });
  }, [setToken]);

  const validateToken = useCallback(
    async (authToken: string) => {
      try {
        const response = await fetch('/api/auth/validate', {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        if (response.ok) {
          const user = await response.json();
          setAuthState({
            user,
            isAuthenticated: true,
            isLoading: false,
          });
        } else {
          logout();
        }
      } catch {
        logout();
      }
    },
    [logout]
  );

  useEffect(() => {
    if (token) {
      validateToken(token);
    } else {
      setAuthState(prev => ({ ...prev, isLoading: false }));
    }
  }, [token, validateToken]);

  const login = async (email: string, password: string) => {
    try {
      setAuthState(prev => ({ ...prev, isLoading: true }));
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const { user, token: authToken } = await response.json();
        setToken(authToken);
        setAuthState({
          user,
          isAuthenticated: true,
          isLoading: false,
        });
        return { success: true };
      } else {
        const errorData = await response.json();
        setAuthState(prev => ({ ...prev, isLoading: false }));
        return { success: false, error: errorData.message };
      }
    } catch {
      setAuthState(prev => ({ ...prev, isLoading: false }));
      return { success: false, error: 'Login failed' };
    }
  };

  const register = async (email: string, password: string, name: string) => {
    try {
      setAuthState(prev => ({ ...prev, isLoading: true }));
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, name }),
      });
      if (response.ok) {
        const { user, token: authToken } = await response.json();
        setToken(authToken);
        setAuthState({
          user,
          isAuthenticated: true,
          isLoading: false,
        });
        return { success: true };
      } else {
        const errorData = await response.json();
        setAuthState(prev => ({ ...prev, isLoading: false }));
        return { success: false, error: errorData.message };
      }
    } catch {
      setAuthState(prev => ({ ...prev, isLoading: false }));
      return { success: false, error: 'Registration failed' };
    }
  };

  return {
    ...authState,
    login,
    logout,
    register,
  };
}
