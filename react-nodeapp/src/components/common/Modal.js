import { Navigate, useParams } from "react-router-dom";
import { deleteAdvert } from "../ads/service";

const Modal = ({ handleModalHidden }) => {
  const params = Object.values(useParams());
  //   const navigate = Navigate();
  const handleDeleteAd = async (event) => {
    try {
      handleModalHidden();
      await deleteAdvert(params[0]);
      // Navigate da error _ref2 is undefined
      //   navigate("/", { replace: true });
    } catch (error) {
      console.log(error);
      handleModalHidden();
    }
  };

  return (
    <div className="modal-confirm">
      <div className="modal-confirm__content">
        <p>Are you sure you want to delete the ad?</p>
        <div>
          <button onClick={handleDeleteAd}>Delete</button>
          <button onClick={handleModalHidden}>Close Modal</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
