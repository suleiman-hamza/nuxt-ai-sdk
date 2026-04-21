// auth.d.ts
declare module "#auth-utils" {
  interface User {
    id: string;
    name: string;
    email: string;
    avatar: string;
    username: string;
    provider: "github";
    providerId: string; // Changed from number to string to match your .toString() in github.grt.ts
    createdAt: Date;
  }

  interface SecureSessionData {
    rateLimits?: Record<string, number>;
  }
}

export {};
