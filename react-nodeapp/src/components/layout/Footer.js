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
                <img src={footerLogo} alt="Venue Logo" />
              </div>
              <p>
                Mauris sit amet quam congue, pulvinar urna et, congue diam. Suspendisse eu lorem massa. Integer sit amet posuere tellus, id efficitur
                leo. In hac habitasse platea dictumst.
              </p>
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-rss"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-dribbble"></i>
                  </a>
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
                        <a href="#">
                          <i className="fa fa-stop"></i>Home
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-stop"></i>New adverts
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={handleLogoutClick}>
                          <i className="fa fa-stop"></i>Logout
                        </a>
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
                  <a href="#">010-050-0550</a>
                </li>
                <li>
                  <span>Email:</span>
                  <a href="#">hi@company.co</a>
                </li>
                <li>
                  <span>Address:</span>
                  <a href="#">company.co</a>
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
