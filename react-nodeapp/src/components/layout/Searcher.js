import { useEffect, useState } from "react";
import { getLatestAds, getTags } from "../ads/service";

const Searcher = ({ handleData }) => {
  const [ads, setAds] = useState([]);
  const [tagsAd, setTagsAd] = useState("");
  const [sale, setSale] = useState("");
  const [name, setName] = useState("");
  let [min, setMin] = useState("");
  let [max, setMax] = useState("");

  useEffect(() => {
    const execute = async () => {
      const ads = await getLatestAds();
      setAds(ads);
      handleData(ads);
    };
    execute();
  }, []);

  useEffect(() => {
    getTags().then((tagsAd) => setTagsAd(tagsAd));
  }, []);

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeTags = (event) => {
    setTagsAd(event.target.value);
  };

  const handleChangeType = (event) => {
    setSale(event.target.value);
  };

  const handleChangePriceMin = (event) => {
    setMin(event.target.value);
  };

  const handleChangePriceMax = (event) => {
    setMax(event.target.value);
  };

  const filteredNames = ads.filter((ad) => {
    if (ad.name.toLowerCase().includes(name.toLowerCase())) {
      return true;
    }
    return false;
  });

  const filteredPrice = ads.filter((ad) => {
    if (ad.price >= min && ad.price <= max) {
      return true;
    }
    return false;
  });

  const filteredType = ads.filter((ad) => {
    if (ad.sale) {
      return true;
    }
    return false;
  });

  const filteredTags = ads.filter((ad) => {
    if (ad.tags.includes(tagsAd)) {
      return true;
    }
    return false;
  });

  console.log("filteredNames", filteredNames);
  console.log("filteredPrice", filteredPrice);
  console.log("filteredType", filteredType);
  console.log("filteredTags", filteredTags);

  return (
    <div className="submit-form">
      <form id="form-submit">
        <div className="row">
          <div className="col-md-2 first-item">
            <fieldset>
              <input
                name="name"
                value={name}
                onChange={handleChangeName}
                type="text"
                className="form-control"
                id="name-product"
                placeholder="Name"
              />
            </fieldset>
          </div>
          <div className="col-md-2 second-item">
            <fieldset>
              <input
                name="price-min"
                value={min}
                onChange={handleChangePriceMin}
                type="text"
                className="form-control"
                id="price-min"
                placeholder="Minimum"
              />
            </fieldset>
          </div>
          <div className="col-md-2 second-item">
            <fieldset>
              <input
                name="price-max"
                value={max}
                onChange={handleChangePriceMax}
                type="text"
                className="form-control"
                id="price-max"
                placeholder="Maximum"
              />
            </fieldset>
          </div>
          <div className="col-md-3 second-item">
            <fieldset>
              <select
                name="sale"
                value={sale}
                onChange={handleChangeType}
                multiple={false}
              >
                <option value="All">Type</option>
                <option value="false">Buy</option>
                <option value="true">Sale</option>
              </select>
            </fieldset>
          </div>
          <div className="col-md-3 third-item">
            <fieldset>
              <select
                name="tags"
                className="form-control"
                value={tagsAd}
                onChange={handleChangeTags}
                multiple={false}
              >
                <option>Select</option>
                <option value="lifestyle">lifestyle</option>
                <option value="mobile">mobile</option>
                <option value="motor">motor</option>
                <option value="work">work</option>
              </select>
            </fieldset>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Searcher;
