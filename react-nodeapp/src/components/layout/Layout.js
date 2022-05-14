import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";
import SubFooter from "./SubFooter";

const Layout = ({ children }) => (
  <div>
    <Header />
    <Banner />
    {children}
    <Footer />
    <SubFooter />
  </div>
);

export default Layout;
