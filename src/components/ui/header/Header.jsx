import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '@store/slices/auth';
import { useIsLoggedIn } from '@hooks';

export const Header = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useIsLoggedIn();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      {/* navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#!">
            Proyecto ATW
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink exact className="nav-link" to="/">
                  Blog
                </NavLink>
              </li>
              {isLoggedIn ? (
                <>
                  <li className="nav-item">
                    <NavLink exact className="nav-link" to="/post/add">
                      Agregar Post
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <button
                      className="nav-link btn text-warning"
                      onClick={handleLogout}
                    >
                      Cerrar sesion
                    </button>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/auth/login">
                    Iniciar sesion
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
