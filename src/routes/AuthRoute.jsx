import { Redirect, Route } from 'react-router-dom';
import { useIsLoggedIn } from '@hooks';

export const AuthRoute = ({ path, exact, children }) => {
  const { isLoggedIn } = useIsLoggedIn();
  return isLoggedIn ? (
    <Redirect to="/" />
  ) : (
    <Route path={path} exact={exact}>
      {children}
    </Route>
  );
};
