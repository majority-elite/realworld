import { Link, useLocation } from 'react-router-dom';

interface NavItemProps {
  linkTo: string;
  caption: string;
  activeAt: RegExp;
  imageUrl?: string;
  iconType?: string;
}

interface HeaderProps {
  isAuthenticated: boolean;
}

const NavItem = ({
  linkTo,
  caption,
  activeAt,
  imageUrl,
  iconType,
}: NavItemProps) => {
  const location = useLocation();

  return (
    <li className="nav-item">
      <Link
        className={`nav-link ${
          activeAt.test(location.pathname) ? 'active' : ''
        }`}
        to={linkTo}
      >
        {imageUrl && <img src={imageUrl} className="user-pic" />}
        {iconType && <i className="ion-compose"></i>}
        {` ${caption} `}
      </Link>
    </li>
  );
};

export const Header = ({ isAuthenticated }: HeaderProps) => {
  const navItemsAuthenticated = (
    <>
      <NavItem
        linkTo="/editor"
        caption="New Article"
        activeAt={new RegExp('\\/editor')}
        iconType="ion-compose"
      />
      <NavItem
        linkTo="/settings"
        caption="Settings"
        activeAt={new RegExp('\\/settings.+')}
        iconType="ion-gear-a"
      />
      <NavItem
        linkTo="/profile/eric-simons"
        caption="Eric Simons"
        activeAt={new RegExp('\\/profile.+')}
        imageUrl=""
      />
    </>
  );

  const navItemsUnauthenticated = (
    <>
      <NavItem
        linkTo="/login"
        caption="Sign in"
        activeAt={new RegExp('\\/login')}
      />
      <NavItem
        linkTo="/register"
        caption="Sign up"
        activeAt={new RegExp('\\/register')}
      />
    </>
  );

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          conduit
        </Link>
        <ul className="nav navbar-nav pull-xs-right">
          <NavItem linkTo="/" activeAt={new RegExp('^\\/$')} caption="Home" />
          {isAuthenticated ? navItemsAuthenticated : navItemsUnauthenticated}
        </ul>
      </div>
    </nav>
  );
};
