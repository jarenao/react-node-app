import { Link } from "react-router-dom";

const EmptyAd = () => (
  <div className="container emptylist">
    <h3>There's nothing here...</h3>
    <Link to="/"> Home</Link>
  </div>
);

export default EmptyAd;
