import "./MainText.css";
import Marquee from "react-fast-marquee";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const OnHoverScan = () => {
  return (
    <Marquee speed={80}>
      <div className="slide-scan-here">
        <div className="slide-scan-here-text text1">
          <span>SCAN HERE</span>
        </div>
        <div className="slide-scan-here-text text2">
          <span>SCAN HERE</span>
        </div>
      </div>
    </Marquee>
  );
};

const MainText =  () => {






  
  const navigate = useNavigate();
  const gotoScanpage = () => {
    navigate("./Scanpage");
  };

  const [showScan, setShowScan] = useState(false);

  const handleClick1 = () => {
    setShowScan(true);
  };

  const handleClick2 = () => {
    setShowScan(false);
  };


  return (
    <>
      <div className="text-container" id="list-item-1">
        <h1 className="center-text">
          <span>
            <span className="website-name-img">faikblock.</span>
            <div className="space"></div>
            Your Journey to Find
            <br />
            Genuine Products
          </span>
        </h1>
        <div className="description-container">
          <p className="center-content">
            Faikblock is a platform which helps you distinguish between
            authentic and counterfeit products. By harnessing blockchain
            technology, we provide a reliable and efficient solution for
            identifying genuine products and spotting fakes with confidence.
          </p>
        </div>
        <div className="scan-button-container">
          <button
            className="scan-button"
            onMouseOver={handleClick1}
            onMouseLeave={handleClick2}
            onClick={gotoScanpage}
          >
            {showScan ? <OnHoverScan /> : "SCAN HERE"}
          </button>
        </div>
      </div>
    </>
  );
};

export default MainText;
