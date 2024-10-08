// src/utils/auth.ts

export async function verifyUserToken(token: string | null) {
    // Simulação de verificação de token
    if (token === 'valid-token') {
      return { isAuthenticated: true };
    } else {
      return { isAuthenticated: false };
    }
  }
  