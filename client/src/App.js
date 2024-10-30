import { ethers } from "ethers";
import { useEffect, useState } from "react";
import ConnectCard from "./components/ConnectCard";
import abi from "./contract/chai.json";
import Table from "./Table";
import toast from 'react-hot-toast';
import BalanceCard from "./components/BalanceCard";

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });


  const [account, setAccount] = useState("None");
  const [balance, setBalance] = useState(0);

  const connectWallet = async () => {
    const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
    const contractABI = abi.abi;
    try {
      const { ethereum } = window;

      if (!ethereum) {
        toast.error('Please Install MetaMask');
        return;
      }

      if (ethereum) {
        const account = await ethereum.request({
          method: "eth_requestAccounts",
        });

        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });

        const provider = new ethers.BrowserProvider(window.ethereum)

        const balanceWei = await provider.getBalance(account[0]);
        const balanceEth = ethers.formatEther(balanceWei);
        const formattedBalance = parseFloat(balanceEth).toFixed(4);
        setBalance(formattedBalance);

        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        setAccount(account);
        setState({ provider, signer, contract });
      } else {
        toast.error('Please install MetaMask');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    connectWallet();
  }, []);

  console.log(state);

  return (

    <div className="bg-white overflow-hidden">

      {
        account === "None" ? (
          <ConnectCard connectWallet={connectWallet} />
        ) : (
          <div className="max-w-7xl mx-auto px-10">
            <BalanceCard account={account[0]} balance={balance}/>
            <Table />
          </div>
        )
      }
    </div>
  );
}

export default App;