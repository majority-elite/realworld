import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  isAuthenticated: boolean;
}

export const Header = ({ isAuthenticated }: HeaderProps) => {
  const location = useLocation();
  const locationPathName = location.pathname;

  const navItemsAuthenticated = (
    <>
      <li className="nav-item">
        <Link
          className={`nav-link ${
            locationPathName === '/editor' ? 'active' : ''
          }`}
          to="/editor"
        >
          <i className="ion-compose"></i> New Article{' '}
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className={`nav-link ${
            locationPathName === '/settings' ? 'active' : ''
          }`}
          to="/settings"
        >
          <i className="ion-gear-a"></i> Settings{' '}
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className={`nav-link ${
            /^\/profile.+$/.test(locationPathName) ? 'active' : ''
          }`}
          to="/profile/eric-simons"
        >
          <img src="" className="user-pic" />
          Eric Simons
        </Link>
      </li>
    </>
  );

  const navItemsUnauthenticated = (
    <>
      <li className="nav-item">
        <Link
          className={`nav-link ${
            locationPathName === '/login' ? 'active' : ''
          }`}
          to="/login"
        >
          Sign in
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className={`nav-link ${
            locationPathName === '/register' ? 'active' : ''
          }`}
          to="/register"
        >
          Sign up
        </Link>
      </li>
    </>
  );

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          conduit
        </Link>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <Link
              className={`nav-link ${locationPathName === '/' ? 'active' : ''}`}
              to="/"
            >
              Home
            </Link>
          </li>
          {isAuthenticated ? navItemsAuthenticated : navItemsUnauthenticated}
        </ul>
      </div>
    </nav>
  );
};
