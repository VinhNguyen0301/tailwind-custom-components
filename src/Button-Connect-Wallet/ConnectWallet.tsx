import React, { useState } from "react";
// import { ethers } from "ethers";
// import { ExternalProvider } from "@ethersproject/providers";

// declare global {
//   interface Window {
//     ethereum?: ExternalProvider;
//   }
// }

const ConnectWallet: React.FC = () => {
  const [account, setAccount] = useState<string | null>(null);
  // const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const connectWallet = async () => {
    // if (window.ethereum) {
    //   try {
    //     const provider = new ethers.providers.Web3Provider(window.ethereum);
    //     const accounts = await provider.send("eth_requestAccounts", []);
    //     setAccount(accounts[0]);
    //     setErrorMessage(null); // Clear any previous errors
    //   } catch (error) {
    //     console.error("User rejected the request.");
    //     setErrorMessage("Connection request was rejected by the user.");
    //   }
    // } else {
    //   console.error("Metamask is not installed.");
    //   setErrorMessage("Metamask is not installed.");
    // }
    setAccount('0xFakeAccount');
  };

  return (
    <div className="flex h-screen items-center justify-center">
      {account ? (
        <div className="text-center">
          <p className="text-lg text-green-500">Connected as:</p>
          <p className="text-lg text-gray-700">{account}</p>
        </div>
      ) : (
        <>
          <button
            onClick={connectWallet}
            className="rounded-full bg-blue-600 px-6 py-2 text-white transition duration-300 hover:bg-blue-700"
          >
            Connect Wallet
          </button>
          {/* {errorMessage && <p className="mt-2 text-red-500">{errorMessage}</p>} */}
        </>
      )}
    </div>
  );
};

export default ConnectWallet;
