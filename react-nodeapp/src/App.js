import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import AdsPage from "./components/ads/AdsPage";
import AdDetailPage from "./components/ads/AdDetailPage";
import LoginPage from "./components/login/LoginPage";
import AdNewPage from "./components/ads/AdNewPage";
import NotFound from "./components/layout/404";
import RequireAuth from "./components/login/RequireAuth";

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
        <Route
          path="/adverts"
          element={
            <RequireAuth isLogged={isLogged}>
              <AdsPage isLogged={isLogged} onLogout={handleLogout} />
            </RequireAuth>
          }
        />
        <Route
          path="/new"
          element={
            <RequireAuth isLogged={isLogged}>
              <AdNewPage isLogged={isLogged} onLogout={handleLogout} />
            </RequireAuth>
          }
        />
        <Route
          path="/adverts/:adsId"
          element={
            <RequireAuth isLogged={isLogged}>
              <AdDetailPage isLogged={isLogged} onLogout={handleLogout} />
            </RequireAuth>
          }
        />
        <Route
          path="/404"
          element={
            <RequireAuth isLogged={isLogged}>
              <NotFound />
            </RequireAuth>
          }
        />
        <Route path="/" element={<Navigate to="/adverts" />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </div>
  );
}

export default App;
