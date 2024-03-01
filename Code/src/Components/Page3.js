import "./Pages.css";
import { useNavigate } from "react-router-dom";
import { FaRegThumbsDown } from "react-icons/fa";
import { TiWarning } from "react-icons/ti";

const Page3 = () => {
  const navigate = useNavigate();
  const gotohome = () => {
    navigate("/");
  };
  const fun = () =>{
    alert("Reported Successfully!")
  }

  return (
    <>
      {/* <div className="scanner-container">*/}
        <div className="page3-container"> 
          <div className="div-for-img"></div>
          <h3>
            <TiWarning className="warning-icon" />
            This Product Is Fake
          </h3>
          <p>Please be cautious</p>
          <button className="report-btn" onClick={fun}>
            <FaRegThumbsDown className="icon-thumbdown" />
            Report
          </button>
          <p className="go-back" onClick={gotohome}>
            Go back!
          </p>
          
         </div>
      {/*</div> */}
    </>
  );
};

export default Page3;
