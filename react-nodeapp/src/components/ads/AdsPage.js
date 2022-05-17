import { useState, useEffect } from "react";
import { getLatestAds } from "./service";
import Layout from "../layout/Layout";
import { Link } from "react-router-dom";
import EmptyListAds from "../common/EmptyListAds";

const AdsPage = ({ isLogged, onLogout }) => {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    const execute = async () => {
      const ads = await getLatestAds();
      setAds(ads.reverse());
    };
    execute();
    return () => {};
  }, []);

  return (
    <Layout isLogged={isLogged} onLogout={onLogout}>
      {!ads.length ? (
        <EmptyListAds />
      ) : (
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
                <Link
                  to={`/adverts/${ad.id}`}
                  className="card-link"
                  key={ad.id}
                >
                  <div className="col-md-4 mt-3">
                    <div className="service-item">
                      <h4>{ad.name}</h4>
                      <h6>
                        {ad.tags.map((tag, index) => (
                          <span key={index}>{tag}</span>
                        ))}
                      </h6>
                      <p>
                        Etiam viverra nibh at lorem hendrerit porta non nec
                        ligula. Donec hendrerit porttitor pretium. Suspendisse
                        fermentum nec risus.
                      </p>
                      <div className="card-footer">
                        <span>Price: {ad.price}€</span>
                        <span>{ad.sale ? "Sale" : "Buy"}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default AdsPage;
