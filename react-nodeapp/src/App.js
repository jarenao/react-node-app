import AdsPage from "./components/ads/AdsPage";
import AdDetailPage from "./components/ads/AdDetailPage";
import LoginPage from "./components/login/LoginPage";
import AdNewPage from "./components/ads/AdNewPage";
import { useState } from "react";

function App({ isInitiallyLogged }) {
  const [isLogged, setIsLogged] = useState(isInitiallyLogged);

  const handleLogin = () => setIsLogged(true);

  const handleLogout = () => {
    setIsLogged(false);
  };

  return (
    <div className="App">
      {/* <AdDetailPage /> */}
      {/* <AdNewPage /> */}
      {isLogged ? <AdsPage isLogged={isLogged} onLogout={handleLogout} /> : <LoginPage onLogin={handleLogin} />}
    </div>
  );
}

export default App;
