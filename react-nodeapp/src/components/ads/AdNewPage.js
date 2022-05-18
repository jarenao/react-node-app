import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Spinner from "../common/Spinner";
import Layout from "../layout/Layout";
import { getUserData } from "../login/service";
import { createAdverts, getTags } from "./service";

const AdNewPage = ({ onLogout }) => {
  const [credentials, setCredentials] = useState({
    name: "",
    price: "",
    photo: "",
    tags: [],
    sale: false,
  });
  const { name, sale, price, tags, photo } = credentials;
  const [error, setError] = useState(null);
  const [tagsAd, setTagsAd] = useState([]);
  const [user, setUser] = useState(null);
  // const { id, username } = user;
  const [isLoading, setIsLoading] = useState(false);
  const [createAd, setCreateAd] = useState(null);

  useEffect(() => {
    getTags().then((tagsAd) => setTagsAd(tagsAd));
  }, []);

  useEffect(() => {
    getUserData().then((user) => setUser(user));
  }, []);

  const handleChange = (event) => {
    setCredentials((credentials) => ({
      ...credentials,
      // [event.target.name]: event.target.type === "radio" ? event.target.checked : event.target.value,
      [event.target.name]:
        event.target.type === "radio"
          ? event.target.checked
          : event.target.type === "file"
          ? event.target.files[0]
          : event.target.value,
    }));
  };

  const resetError = () => setError(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      resetError();
      setIsLoading(true);
      const createAd = await createAdverts({ name, sale, price, tags });
      setCreateAd(createAd);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  if (createAd) {
    return <Navigate to={`/`} />;
  }

  return (
    <Layout onLogout={onLogout}>
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
              <form
                className="form-horizontal"
                id="ad-form"
                onSubmit={handleSubmit}
              >
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
                      type="number"
                      className="form-control"
                      id="price"
                      placeholder="Price"
                      required=""
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="photo">
                    Image
                  </label>
                  <div className="col-sm-10">
                    <input
                      onChange={handleChange}
                      value={photo}
                      name="photo"
                      type="file"
                      accept="image/*"
                      className="form-control"
                      id="photo"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-10">
                    <label>
                      <input
                        type="radio"
                        onChange={handleChange}
                        value="buy"
                        checked={sale}
                        name="sale"
                        id="optionsRadios1"
                        required=""
                      />
                      Buy
                    </label>
                    <label>
                      <input
                        type="radio"
                        onChange={handleChange}
                        value="sale"
                        checked={sale}
                        name="sale"
                        id="optionsRadios2"
                        required=""
                      />
                      Sale
                    </label>
                  </div>
                </div>

                <div className="form-group">
                  <div className="col-sm-12">
                    <label
                      htmlFor="ad-price"
                      className="col-sm-2 control-label"
                    >
                      Tags
                    </label>
                    <div className="col-sm-10">
                      <select
                        name="tags"
                        multiple
                        className="form-control"
                        required=""
                        value={tags}
                        onChange={handleChange}
                      >
                        {tagsAd.map((tag, index) => (
                          <option key={index} value={tag}>
                            {tag}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="form-group"></div>
                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-10">
                    <button
                      type="submit"
                      className="btn"
                      disabled={!name || !price || !tags}
                    >
                      Create
                    </button>
                  </div>
                  {error && (
                    <div
                      onClick={resetError}
                      className="col-sm-offset-2 col-sm-10 error"
                    >
                      <span>{error.message}</span>
                    </div>
                  )}
                </div>
              </form>
              {isLoading && <Spinner />}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AdNewPage;
