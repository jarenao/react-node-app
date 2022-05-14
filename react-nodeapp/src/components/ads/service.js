import client from "../../api/client";

const adsBaseUrl = "/api";

export const getLatestAds = () => {
  const url = `${adsBaseUrl}/v1/adverts`;
  return client.get(url);
};

export const getTags = () => {
  const url = `${adsBaseUrl}/v1/adverts/tags`;
  return client.get(url);
};

export const setAdverts = () => {
  const url = `${adsBaseUrl}/v1/adverts`;
  return client.post(url);
};

//TODO
// Delete anuncio :id

//TODO
// Detalle del anuncio :id
