import { useWriteContract , writeContract } from 'wagmi';
import abi from "../Metadata/abi.json";
import contractAddress from "../Metadata/ContractAddress";
import { useAccount } from "wagmi";
import { sepolia} from 'wagmi/chains' ;
import {  UseWriteContractParameters } from 'wagmi'
import { sepolia } from 'wagmi/chains';

function App() {
    const account = useAccount()
    const { writeContract } = useWriteContract()
    writeContract({ 
        abi,
        address: contractAddress,
        functionName: 'transferFrom',
        args: [
          '0xd2135CfB216b74109775236E36d4b433F1DF507B',
          '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
          123n,
        ],
        account: account.address, 
        chainId: sepolia.id,
        connector,
        value: parseEther('1'), 
     })

}
