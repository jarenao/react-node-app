import AdsPage from "./components/ads/AdsPage";
import AdDetailPage from "./components/ads/AdDetailPage";
import LoginPage from "./components/login/LoginPage";
import AdNewPage from "./components/ads/AdNewPage";

function App() {
  return (
    <div className="App">
      <AdsPage />
      <AdDetailPage />
      <LoginPage />
      <AdNewPage />
    </div>
  );
}

export default App;
