import { useState } from "react";
import Layout from "../layout/Layout";

const AdNewPage = () => {
  const [credentials, setCredentials] = useState({ name: "", price: "", urlFile: "", tags: [], typeAd: false });

  const { name, price, urlFile, tags, typeAd } = credentials;

  const handleChange = (event) => {
    setCredentials((credentials) => ({
      ...credentials,
      [event.target.name]: event.target.type === "radio" ? event.target.checked : event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(credentials);
  };

  return (
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
              <form className="form-horizontal" id="ad-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="col-sm-2 control-label">
                    Name
                  </label>
                  <div className="col-sm-10">
                    <input
                      onChange={handleChange}
                      value={name}
                      name="name"
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Product name"
                      required=""
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="price" className="col-sm-2 control-label">
                    Price
                  </label>
                  <div className="col-sm-10">
                    <input
                      onChange={handleChange}
                      value={price}
                      name="price"
                      type="text"
                      className="form-control"
                      id="price"
                      placeholder="Price"
                      required=""
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="urlFile">
                    Image
                  </label>
                  <div className="col-sm-10">
                    <input onChange={handleChange} value={urlFile} name="urlFile" type="file" className="form-control" id="urlFile" />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-10">
                    <label>
                      <input type="radio" onChange={handleChange} value="buy" checked={typeAd} name="typeAd" id="optionsRadios1" required="" />
                      Buy
                    </label>
                    <label>
                      <input type="radio" onChange={handleChange} value="sale" checked={typeAd} name="typeAd" id="optionsRadios2" />
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
                      <select name="tags" multiple className="form-control" required="" value={tags} onChange={handleChange}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="form-group"></div>
                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-10">
                    <button type="submit" className="btn" disabled={!name || !price || !urlFile}>
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
};

export default AdNewPage;
