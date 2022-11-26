import { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Main } from '@layout';
import { useLogin } from '@hooks';
import { Alert } from '@components/ui';
import { login } from '@store/slices/auth';

import './login.css';

export const Login = () => {
  const { form, handleSubmit, handleInputChange, error, response } = useLogin();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (response.token && response.username) {
      dispatch(login(response.token));
      history.push('/');
    }
  }, [response]);

  return (
    <Main>
      <div className="row justify-content-center">
        <div className="col-md-8">
          {error && <Alert content={error} />}
          <div className="login-wrap p-4 p-md-5">
            <h3 className="text-center mb-4">Iniciar sesion</h3>
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className="form-control rounded-left my-3"
                  placeholder="Email"
                  required
                  value={form.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group d-flex">
                <input
                  type="password"
                  name="password"
                  className="form-control rounded-left"
                  placeholder="Password"
                  required
                  value={form.password}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-dark rounded submit px-5 mt-3 mb-2"
                >
                  Iniciar sesion
                </button>
                ¿No tienes cuenta?{' '}
                <Link to="/auth/register">Registrate aqui</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Main>
  );
};
