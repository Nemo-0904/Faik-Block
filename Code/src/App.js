import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbarpage from "./Components/Navbarpage";
import Homepage from "./Components/Homepage";
import LoginSignUp from "./Components/LoginSignUp";
import JoinUs from "./Components/Joinus";
import Scanpage from "./Components/Scanpage";
import Aboutus from "./Components/Aboutus";
import { WagmiProvider, createConfig } from "wagmi";
import { ConnectKitProvider, ConnectKitButton, getDefaultConfig } from "connectkit";
import { mainnet,polygon,sepolia, optimism, arbitrum } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Team from "./Components/Team";



const chains = [mainnet,sepolia,polygon, optimism, arbitrum ];


const config = createConfig(
  getDefaultConfig({

    alchemyId:process.env.INFURA_ID, // or infuraId
    walletConnectProjectId:process.env.WALLETCONNECT_PROJECT_ID,
    chains,

    // Required
    appName: "FAIKBLOCK",

    // Optional
    appDescription: "Your App Description",
    appUrl: "https://family.co", // your app's url
    appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  }),
);

const queryClient = new QueryClient();


function App() {
  return (
    <> <WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}>
    <ConnectKitProvider theme="retro" >
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Navbarpage />}>
            <Route index element={<Homepage />} />
          </Route>
          <Route exact path="/Aboutus" element={<Aboutus />} />
          <Route exact path="/Scanpage" element={<Scanpage />} />
          <Route exact path="/LoginSignUp" element={<LoginSignUp />} />
          <Route exact path="/JoinUs" element={<JoinUs />} />
          <Route exact path="/Team" element={<Team/>}/>
        </Routes>
      </BrowserRouter>
      </ConnectKitProvider>
      </QueryClientProvider> 
      </WagmiProvider> 
    </>
  );
}

export default App;
