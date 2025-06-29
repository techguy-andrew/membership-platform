export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}

export class AuthService {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static async login(_email: string, _password: string): Promise<User> {
    throw new Error('Login implementation coming soon');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static async register(_userData: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }): Promise<User> {
    throw new Error('Registration implementation coming soon');
  }

  static async logout(): Promise<void> {
    throw new Error('Logout implementation coming soon');
  }

  static async getCurrentUser(): Promise<User | null> {
    throw new Error('Get current user implementation coming soon');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static async resetPassword(_email: string): Promise<void> {
    throw new Error('Password reset implementation coming soon');
  }
}
