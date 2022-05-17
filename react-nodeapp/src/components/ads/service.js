import client from "../../api/client";

const adsBaseUrl = "/api";

export const getLatestAds = () => {
  const url = `${adsBaseUrl}/v1/adverts`;
  return client.get(url);
};

export const getAd = (adId) => {
  const url = `${adsBaseUrl}/v1/adverts/${adId}`;
  // return client.get("http://localhost:3001/api/v1/adverts/2be87a94-1de1-43ea-ab5c-e245ecb4e41b");
  return client.get(url);
};

export const getTags = () => {
  const url = `${adsBaseUrl}/v1/adverts/tags`;
  return client.get(url);
};

export const createAdverts = (ad) => {
  const url = `${adsBaseUrl}/v1/adverts`;
  return client.post(url, ad, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

//TODO
// Delete anuncio :id
