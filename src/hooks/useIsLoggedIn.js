import { useSelector } from 'react-redux';

export const useIsLoggedIn = () => {
  const auth = useSelector((state) => state.auth);
  const isLoggedIn = auth.isLoggedIn && auth.token;

  return {
    isLoggedIn,
  };
};
