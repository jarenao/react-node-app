import client from "../../api/client";

const adsBaseUrl = "/api";

export const getLatestAds = () => {
  const url = `${adsBaseUrl}/v1/adverts`;
  return client.get(url);
};
