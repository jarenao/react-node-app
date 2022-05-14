import Searcher from "./Searcher";

const BannerPage = () => (
  <section className="banner" id="top">
    <div className="container">
      <div className="row">
        <div className="col-md-10 col-md-offset-1">
          <div className="banner-caption">
            <div className="line-dec"></div>
            <h2>Best Finder For You</h2>
            <span>Suspendisse eu lorem massa. Integer sit amet posuere tellus.</span>
          </div>
          <Searcher />
        </div>
      </div>
    </div>
  </section>
);

export default BannerPage;
