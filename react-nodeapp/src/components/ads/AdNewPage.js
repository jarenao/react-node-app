import Layout from "../layout/Layout";

const AdNewPage = () => (
  <Layout>
    <section className="new-advert-form">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <h2>Add a new advertisement</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-10">
            <form className="form-horizontal" id="ad-form">
              <div className="form-group">
                <label htmlFor="ad-name" className="col-sm-2 control-label">
                  Name
                </label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="ad-name" placeholder="Product name" required="" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="ad-price" className="col-sm-2 control-label">
                  Price
                </label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="ad-price" placeholder="Price" required="" />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="customFile">
                  Image
                </label>
                <div className="col-sm-10">
                  <input type="file" className="form-control" id="customFile" />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <label>
                    <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" required="" />
                    Buy
                  </label>
                  <label>
                    <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2" />
                    Sale
                  </label>
                </div>
              </div>

              <div className="form-group">
                <div className="col-sm-12">
                  <label htmlFor="ad-price" className="col-sm-2 control-label">
                    Tags
                  </label>
                  <div className="col-sm-10">
                    <select multiple className="form-control" required="">
                      <option>-- Select tags --</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-group"></div>
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <button type="submit" className="btn">
                    Create
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default AdNewPage;
