import client from "../../api/client";

const adsBaseUrl = "/api";

export const login = ({ remember, ...credentials }) => {
  const url = `${adsBaseUrl}/auth/login`;
  return client.post(url, credentials);
};
