const Searcher = () => (
  <div className="submit-form">
    <form id="form-submit" action="">
      <div className="row">
        <div className="col-md-2 first-item">
          <fieldset>
            <input name="name-product" type="text" className="form-control" id="name-product" placeholder="Name" />
          </fieldset>
        </div>
        <div className="col-md-2 second-item">
          <fieldset>
            <input name="price-product" type="text" className="form-control" id="price-product" placeholder="Price" />
          </fieldset>
        </div>
        <div className="col-md-2 second-item">
          <fieldset>
            <select name="buy-sale">
              <option value="">Type</option>
              <option value="Buy">Buy</option>
              <option value="Sale">Sale</option>
            </select>
          </fieldset>
        </div>
        <div className="col-md-3 third-item">
          <fieldset>
            <select name="category">
              <option value="">Select tags</option>
              <option value="Shops">Shops</option>
              <option value="Hotels">Hotels</option>
              <option value="Restaurants">Restaurants</option>
            </select>
          </fieldset>
        </div>
        <div className="col-md-3">
          <fieldset>
            <button type="submit" className="btn">
              Search Now
            </button>
          </fieldset>
        </div>
      </div>
    </form>
  </div>
);

export default Searcher;
