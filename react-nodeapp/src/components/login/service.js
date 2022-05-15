import client, { removeAuthorizationHeader, setAuthorizationHeader } from "../../api/client";
import storage from "../../utils/storage";

const adsBaseUrl = "/api";

export const login = ({ remember, ...credentials }) => {
  const url = `${adsBaseUrl}/auth/login`;
  return client.post(url, credentials).then(({ accessToken }) => {
    setAuthorizationHeader(accessToken);
    storage.set("auth", accessToken);
  });
};

export const logout = () => {
  return Promise.resolve().then(() => {
    removeAuthorizationHeader();
    storage.remove("auth");
  });
};
