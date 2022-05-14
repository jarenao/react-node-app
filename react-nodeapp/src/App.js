import HeaderPage from "./components/HeaderPage";
import AdsPage from "./components/ads/AdsPage";
import FooterPage from "./components/FooterPage";
import SubFooter from "./components/SubFooter";
import BannerPage from "./components/Banner";
import AdDetail from "./components/ads/AdDetail";

function App() {
  return (
    <div className="App">
      <HeaderPage />
      <BannerPage />
      <AdsPage />
      <AdDetail />
      <FooterPage />
      <SubFooter />
    </div>
  );
}

export default App;
