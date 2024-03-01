import { useNavigate } from "react-router-dom";
import "./Pages.css";

const Page2 = (props) => {
  const navigate = useNavigate();
  const gotohome = () => {
    navigate("/");
  };

  return (
    <>
      {/* <div className="scanner-container"> */}
        <div className="page2-container">
          <div className="tick-icon"></div>
          <div class="rubber_stamp">Expired</div>
          <h3>
            Product is Original{" "}
            
          </h3>
          <p className="out-off">But EXPIRED!!</p>
          <div className="details">
            <p>Product Name : {props.productname}</p>
            <p>Manufacturing Company : {props.companyname}</p>
            <button className="payment-btn" disabled={true} >
              Buy Me
            </button>
            <p className="go-back" onClick={gotohome}>
              Go back!
            </p>
          </div>
        </div>
      {/* </div> */}
    </>
  );
};

export default Page2;
