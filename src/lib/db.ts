export interface DatabaseConfig {
  url: string;
  poolSize?: number;
  ssl?: boolean;
}

export class DatabaseConnection {
  private static instance: DatabaseConnection;
  private config: DatabaseConfig;

  private constructor(config: DatabaseConfig) {
    this.config = config;
  }

  static getInstance(config?: DatabaseConfig): DatabaseConnection {
    if (!DatabaseConnection.instance && config) {
      DatabaseConnection.instance = new DatabaseConnection(config);
    }
    return DatabaseConnection.instance;
  }

  async connect(): Promise<void> {
    throw new Error('Database connection implementation coming soon');
  }

  async disconnect(): Promise<void> {
    throw new Error('Database disconnection implementation coming soon');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async query<T>(_sql: string, _params?: unknown[]): Promise<T[]> {
    throw new Error('Database query implementation coming soon');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async transaction<T>(_callback: () => Promise<T>): Promise<T> {
    throw new Error('Database transaction implementation coming soon');
  }
}
