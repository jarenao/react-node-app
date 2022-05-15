import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";
import SubFooter from "./SubFooter";

const Layout = ({ children, isLogged, onLogout }) => (
  <div>
    <Header onLogout={onLogout} />
    {isLogged ? <Banner isLogged={isLogged} /> : null}
    {children}
    <Footer onLogout={onLogout} />
    <SubFooter />
  </div>
);

export default Layout;
