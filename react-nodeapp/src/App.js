import AdsPage from "./components/ads/AdsPage";
import AdDetailPage from "./components/ads/AdDetailPage";
import LoginPage from "./components/login/LoginPage";
import AdNewPage from "./components/ads/AdNewPage";
import { useState } from "react";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = () => setIsLogged(true);
  return (
    <div className="App">
      {/* <AdDetailPage /> */}
      {isLogged ? <AdsPage /> : <LoginPage onLogin={handleLogin} />}
      {/* <AdNewPage /> */}
    </div>
  );
}

export default App;
