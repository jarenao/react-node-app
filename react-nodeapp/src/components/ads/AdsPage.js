import { useState, useEffect } from "react";
import { getLatestAds } from "./service";
import Layout from "../layout/Layout";

const ads = [
  {
    name: "Cajón",
    sale: true,
    price: 20,
    tags: ["lifestyle"],
    id: 1,
  },
  {
    name: "Balón",
    sale: false,
    price: 40,
    tags: ["work", "motor"],
    id: 2,
  },
];

const AdsPage = ({ isLogged, onLogout }) => {
  // const [ads, setAds] = useState([]);

  // useEffect(() => {
  //   getLatestAds().then((ads) => setAds(ads));
  // }, []);

  return (
    <Layout isLogged={isLogged} onLogout={onLogout}>
      <section className="our-services" id="services">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Best advertising site</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {ads.map((ad) => (
              <div key={ad.id} className="col-md-4">
                <div className="service-item">
                  <h4>{ad.name}</h4>
                  <h6>
                    {ad.tags.map((tag, index) => (
                      <span key={index}>{tag}</span>
                    ))}
                  </h6>
                  <p>
                    Etiam viverra nibh at lorem hendrerit porta non nec ligula. Donec hendrerit porttitor pretium. Suspendisse fermentum nec risus.
                  </p>
                  <div className="card-footer">
                    <span>Price: {ad.price}€</span>
                    <span>{ad.sale ? "Sale" : "Buy"}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AdsPage;
