import { Link } from "react-router-dom";
import footerLogo from "../../img/footer_logo.png";
import { logout } from "../login/service";

const Footer = ({ onLogout }) => {
  const handleLogoutClick = async () => {
    await logout();
    onLogout();
  };
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="about-veno">
              <div className="logo">
                <Link to="/adverts">
                  <img src={footerLogo} alt="Venue Logo" />
                </Link>
              </div>
              <p>
                Mauris sit amet quam congue, pulvinar urna et, congue diam. Suspendisse eu lorem massa. Integer sit amet posuere tellus, id efficitur
                leo. In hac habitasse platea dictumst.
              </p>
              <ul className="social-icons">
                <li>
                  <Link to="/">
                    <i className="fa fa-facebook"></i>
                  </Link>

                  <Link to="/">
                    <i className="fa fa-twitter"></i>
                  </Link>

                  <Link to="/">
                    <i className="fa fa-linkedin"></i>
                  </Link>

                  <Link to="/">
                    <i className="fa fa-rss"></i>
                  </Link>

                  <Link to="/">
                    <i className="fa fa-dribbble"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            {onLogout && (
              <div className="useful-links">
                <div className="footer-heading">
                  <h4>Useful Links</h4>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <ul>
                      <li>
                        <Link to="/adverts">
                          <i className="fa fa-stop"></i>Home
                        </Link>
                      </li>
                      <li>
                        <Link to="/new">
                          <i className="fa fa-stop"></i>New adverts
                        </Link>
                      </li>
                      <li>
                        <Link to="/login" onClick={handleLogoutClick}>
                          <i className="fa fa-stop"></i>Logout
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="col-md-3">
            <div className="contact-info">
              <div className="footer-heading">
                <h4>Contact Information</h4>
              </div>
              <p>Praesent iaculis gravida elementum. Proin fermentum neque facilisis semper pharetra. Sed vestibulum vehicula tincidunt.</p>
              <ul>
                <li>
                  <span>Phone:</span>
                  <Link to="/">010-050-0550</Link>
                </li>
                <li>
                  <span>Email:</span>
                  <Link to="/">hi@company.co</Link>
                </li>
                <li>
                  <span>Address:</span>
                  <Link to="/">company.co</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
