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
              <div className="logo">
                <a href="#">
                  <img src={logo} alt="Venue Logo" />
                </a>
              </div>
              {onLogout && (
                <nav id="primary-nav" className="dropdown cf">
                  <ul className="menu">
                    <li>
                      <a className="" href="#">
                        New adverts
                      </a>
                    </li>
                    <li>
                      <a className="" href="#" onClick={handleLogoutClick}>
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
