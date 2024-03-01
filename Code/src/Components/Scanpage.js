import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useRef } from "react";
import { useState } from "react";
import "./Scanpage.css";
import Afterscan from "./Afterscan";





const Scanpage = () => {
  const [ScanResult, setScanResult] = useState(null);
  const scannerRef = useRef(null);

  useEffect(() => {
    if (!scannerRef.current) {
      scannerRef.current = new Html5QrcodeScanner("reader", {
        qrbox: {
          width: 250,
          height: 250,
        },
        fps: 5,
      });

      scannerRef.current.render(success, error);
    }

    function success(result) {
      setScanResult(result);
      if (scannerRef.current) {
        scannerRef.current.clear();
      }
    }

    function error(err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      <div className="scanner-container">
        {ScanResult ? (
        <div id="reader">
          <Afterscan parameter={ScanResult}/>
        </div>
        ) : (
        <div id="reader"></div>
        )}
      </div>
    </>
  );
};

export default Scanpage;
