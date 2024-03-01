import { useEffect, useState } from "react";
import "./Pages.css";
import ReactConfetti from "react-confetti";
import { useNavigate } from "react-router-dom";
import { useWriteContract } from 'wagmi';
import abi from "../Metadata/abi.json";
import contractAddress from "../Metadata/ContractAddress";
import { useAccount } from "wagmi";
import { sepolia } from 'wagmi/chains';
import { parseEther } from 'viem';
/* global BigInt */


const Page1 = (props) => {
  
  const navigate = useNavigate();
  const gotohome = () => {
    navigate("/");
  };

  const [windowdimenstions, setdimentions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const detectSize = () => {
    setdimentions({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowdimenstions]);



  
  const no = BigInt(props.cost);
  const price = (Number(no))*10**(-18);
  

  const { writeContract } = useWriteContract()
  const account = useAccount()
  
  const Payy = (props) => {
    console.log("Me");
    // const is = (props.cost).toString();
    // const myBigInt = BigInt(props.cost);  
    // const myNumber = Number(myBigInt);
    // const valueeee = (*10**18).toString();
    // console.log(props.id);
    // console.log(props.cost);
    // console.log(myNumber);
    // const valueee = myNumber.toString();
    // console.log(valueee);
    console.log(props);

    if (props.status == false) {

      return (writeContract({
        abi,
        address: contractAddress,
        functionName: 'pay',
        args: [
          props.productid
        ],
        account:account.address,
        chainId:sepolia.id,
        value: BigInt(props.cost),
      }));
    }
    return alert("Product is already Purchased");

  }
 

  return (
    <>
      {/* <div className="scanner-container"> */}
      <ReactConfetti
            width={windowdimenstions.width}
            height={windowdimenstions.height}
            tweenDuration={1000}
          />
        <div className="page1-container">
          
          <div className="tick-icon1"></div>
          <h3>Product is Original</h3>
          <div className="details">
            <p>Product Name : {props.productname} </p>
            <p>Manufacturing Company : {props.companyname}</p>
            <p>Date of Expiry : {props.expiry}</p>
            <p>Product Cost : {price} ether </p>
            <button className="payment-btn" onClick={ () => Payy(props)}>Buy Me</button>
            <p className="go-back" onClick={gotohome}>
              Go back!
            </p>
          </div>
        </div>
      {/* </div> */}
    </>
  );
};


// when we pass account address then metisGoerli,value mein store hota hai mera account.address 
export default Page1;
