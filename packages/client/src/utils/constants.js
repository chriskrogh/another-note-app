export const AUTH_API_ENDPOINT =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:5000/api/auth'
    : '/api/auth';
