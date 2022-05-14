import Header from "./components/Header";
import AdsPage from "./components/ads/AdsPage";
import Footer from "./components/Footer";
import SubFooter from "./components/SubFooter";
import BannerPage from "./components/Banner";
import AdDetailPage from "./components/ads/AdDetailPage";
import LoginPage from "./components/LoginPage";
import AdNewPage from "./components/ads/AdNewPage";

function App() {
  return (
    <div className="App">
      <Header />
      <BannerPage />
      <AdsPage />
      <AdDetailPage />
      <LoginPage />
      <AdNewPage />
      <Footer />
      <SubFooter />
    </div>
  );
}

export default App;
