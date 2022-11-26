export const authMiddleware = (store) => (next) => (action) => {
  const { type, payload } = action;
  if (type === 'auth/login' || type === 'auth/register') {
    localStorage.setItem('jwt', payload);
  } else if (type === 'auth/logout') {
    localStorage.removeItem('jwt');
  }
  return next(action);
};
