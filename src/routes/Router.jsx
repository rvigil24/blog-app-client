import { Switch, Route } from 'react-router-dom';
import { Blog, NotFound, Post, Login, Register, AddPost } from '@pages';
import { AuthRoute } from './AuthRoute';
import { PrivateRoute } from './PrivateRoute';

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Blog} />
      <AuthRoute exact path="/auth/login">
        <Login />
      </AuthRoute>
      <AuthRoute exact path="/auth/register">
        <Register />
      </AuthRoute>
      <PrivateRoute exact path="/post/add">
        <AddPost />
      </PrivateRoute>
      <Route exact path="/post/:postId" component={Post} />
      <Route path="/*" component={NotFound} />
      <Blog />
    </Switch>
  );
};
