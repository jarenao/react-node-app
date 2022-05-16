import { Link, NavLink } from "react-router-dom";
import logo from "../../img/logo.png";
import { logout } from "../login/service";

const Header = ({ onLogout }) => {
  const handleLogoutClick = async () => {
    await logout();
    onLogout();
  };
  return (
    <div className="wrap">
      <header id="header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Link to="/adverts">
                <div className="logo">
                  <img src={logo} alt="Venue Logo" />
                </div>
              </Link>
              <nav id="primary-nav" className="dropdown cf">
                <ul className="menu">
                  {onLogout && (
                    <li>
                      <NavLink to="/new" style={({ isActive }) => (isActive ? { color: "#4883ff" } : null)}>
                        New adverts
                      </NavLink>
                    </li>
                  )}
                  {onLogout && (
                    <li>
                      <Link to="/login" onClick={handleLogoutClick}>
                        Logout
                      </Link>
                    </li>
                  )}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
