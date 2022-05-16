import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="error-container">
      <h1>
        4<i className="fa fa-frown-o"></i>4
      </h1>
      <p className="return">
        Back to <Link to="/adverts">Home page</Link>
      </p>
    </div>
  );
};

export default NotFound;
