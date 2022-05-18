import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import Layout from "../layout/Layout";
import noImage from "../../img/no-image.jpg";
import { getAd } from "./service";
import EmptyAd from "../common/EmptyAd";
import Modal from "../common/Modal";

const AdDetailPage = ({ onLogout }) => {
  const [adDetail, setAdDetail] = useState(null);
  const adId = Object.values(useParams());

  const [modal, setModal] = useState(false);
  const handleModalVisible = () => setModal(true);
  const handleModalHidden = () => setModal(false);

  useEffect(() => {
    getAd(adId[0]).then((adDetail) => setAdDetail(adDetail));
  }, []);

  return (
    <Layout onLogout={onLogout}>
      {modal && <Modal handleModalHidden={handleModalHidden} />}

      {!adDetail ? (
        <EmptyAd />
      ) : (
        <section className="detail" id="detail">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-heading">
                  <h2>Detail advertisement</h2>
                </div>
              </div>
            </div>
            <div className="row center">
              <div className="col-md-6">
                <div className="service-item">
                  <div className="icon">
                    <img
                      src={adDetail.photo ? adDetail.photo : noImage}
                      alt={adDetail.name}
                    />
                  </div>
                  <h4>{adDetail.name}</h4>
                  <h6>
                    {adDetail.tags.map((tag, index) => (
                      <span key={index}>{tag}</span>
                    ))}
                  </h6>
                  <p>
                    Etiam viverra nibh at lorem hendrerit porta non nec ligula.
                    Donec hendrerit porttitor pretium. Suspendisse fermentum nec
                    risus.
                  </p>
                  <div className="card-footer">
                    <span>Price: {adDetail.price}€</span>
                    <span>{adDetail.sale ? "Sale" : "Buy"}</span>
                  </div>
                  <Link to="#">
                    <i
                      className="fa fa-trash icon-trash"
                      aria-hidden="true"
                      onClick={handleModalVisible}
                    ></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default AdDetailPage;
