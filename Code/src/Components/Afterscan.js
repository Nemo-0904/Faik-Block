import React from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import { useAccount } from "wagmi";
import { useReadContract } from "wagmi";
import abi from "../Metadata/abi.json";
import contractAddress from "../Metadata/ContractAddress";
import { sepolia } from 'wagmi/chains';
/* global BigInt */



const Afterscan = (props) => {
    const account = useAccount();

    const { data, error, isPending } = useReadContract({
        abi,
        address: contractAddress,
        functionName: "getter",
        chainId: sepolia.chainId,
        account: account.address
    });

    const { unix } = useReadContract({
        abi,
        address: contractAddress,
        functionName: "update_time",
        chainId: sepolia.chainId,
        account: account.address
    });



    if (data) {
        // if (unix) {


        console.log(data);
        console.log("Hey Girl");
        for (let i = 0; i < data.length; i++) {

            if (props.parameter == data[i].uuid) {
                console.log("Hey Girl");
                console.log(i);

                const no = BigInt(data[i].expiry);
                const exp = (Number(no));

                console.log(exp / 1000);
                // console.log(data[i].expiry);
                // console.log(12);
                console.log(Math.floor(Date.now() / 1000));

                
const unixTimestamp = Number(data[i].expiry);

// Create a new Date object
const date = new Date(unixTimestamp * 1000); // Multiply by 1000 to convert seconds to milliseconds

// Use Date methods to get the components of the date
const year = date.getFullYear();
const month = date.getMonth() + 1; // Month is zero-based, so add 1
const day = date.getDate();

const formattedDate = `${day.toString().padStart(2, '0')}-${month.toString().padStart(2, '0')}-${year}`;




                if (Math.floor(Date.now() / 1000) >= exp) {

                    return <Page2 productname={data[i].name} companyname={data[i].name_of_company} cost={data[i].cost} />
                } else {

                    return <Page1 productid={i} productname={data[i].name} companyname={data[i].name_of_company} expiry={formattedDate} cost={data[i].cost} status={data[i].sold} />
                }






            }
        }
        return <Page3 />
    }
}

export default Afterscan;