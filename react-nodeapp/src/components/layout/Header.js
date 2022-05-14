import logo from "../../img/logo.png";

const Header = () => (
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
            <nav id="primary-nav" className="dropdown cf">
              <ul className="dropdown menu">
                <li>
                  <a className="scrollTo" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  </div>
);

export default Header;
