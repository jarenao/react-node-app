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
              <a href="index.html">
                <div className="logo">
                  <img src={logo} alt="Venue Logo" />
                </div>
              </a>
              {onLogout && (
                <nav id="primary-nav" className="dropdown cf">
                  <ul className="menu">
                    <li>
                      <a className="scrollTo" href="#" onClick={handleLogoutClick}>
                        Logout
                      </a>
                    </li>
                  </ul>
                </nav>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
