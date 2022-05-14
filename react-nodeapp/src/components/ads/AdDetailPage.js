import Layout from "../layout/Layout";

const AdDetailPage = () => (
  <Layout>
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
                <img src="img/boligrafo.jpg" alt="" />
              </div>
              <h4>Name</h4>
              <h6>Tags</h6>
              <p>Etiam viverra nibh at lorem hendrerit porta non nec ligula. Donec hendrerit porttitor pretium. Suspendisse fermentum nec risus.</p>
              <div className="card-footer">
                <span>Price: 25€</span>
                <span>Buy</span>
              </div>
              <a href="#">
                <i className="fa fa-trash icon-trash" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default AdDetailPage;
