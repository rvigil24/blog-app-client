import { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Main } from '@layout';
import { Alert } from '@components/ui';
import { register } from '@store/slices/auth';
import { useRegister } from '@hooks';

import './register.css';

export const Register = () => {
  const { form, handleSubmit, handleInputChange, error, response } =
    useRegister();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (response.token) {
      dispatch(register(response.token));
      history.push('/');
    }
  }, [response]);

  return (
    <Main>
      <div className="row justify-content-center">
        <div className="col-md-8">
          {error && <Alert content={error} />}
          <div className="login-wrap p-4 p-md-5">
            <h3 className="text-center mb-4">Registrarse</h3>
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control rounded-left my-3"
                  placeholder="Username"
                  name="username"
                  required
                  value={form.username}
                  onChange={handleInputChange}
                />
              </div>
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
                  Registrate
                </button>
                ¿Ya tienes cuenta?{' '}
                <Link to="/auth/login">Inicia sesión aquí</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Main>
  );
};
