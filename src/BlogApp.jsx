import { useSelector } from 'react-redux';
import { Router } from '@routes';

export const BlogApp = () => {
  const auth = useSelector((state) => state.auth);
  const isLoggedIn = auth.isLoggedIn && auth?.user?.token;

  return (
    <>
      <Router />
    </>
  );
};
