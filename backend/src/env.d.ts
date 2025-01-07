declare namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test'; // Exemplo de variáveis
      PORT?: string; // Pode ser opcional e deve ser string
      DATABASE_URL: string;
    }
  }
