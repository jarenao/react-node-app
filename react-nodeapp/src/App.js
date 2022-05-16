import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import AdsPage from "./components/ads/AdsPage";
import AdDetailPage from "./components/ads/AdDetailPage";
import LoginPage from "./components/login/LoginPage";
import AdNewPage from "./components/ads/AdNewPage";
import NotFound from "./components/layout/404";

function App({ isInitiallyLogged }) {
  const [isLogged, setIsLogged] = useState(isInitiallyLogged);

  const handleLogin = () => setIsLogged(true);

  const handleLogout = () => {
    setIsLogged(false);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/adverts" element={<AdsPage isLogged={isLogged} onLogout={handleLogout} />} />
        <Route path="/adverts/:adsId" element={<AdDetailPage />} />
        <Route path="/new" element={<AdNewPage />} />
        <Route path="/" element={<Navigate to="/adverts" />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
      {/* <AdDetailPage /> */}
      {/* <AdNewPage /> */}
      {/* {isLogged ? <AdsPage isLogged={isLogged} onLogout={handleLogout} /> : <LoginPage onLogin={handleLogin} />} */}
    </div>
  );
}

export default App;
