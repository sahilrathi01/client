import { createWalletClient, custom, http } from 'viem';
import { syscoin } from 'viem/chains';
import { useState, useEffect } from 'react';
import App from '../App';

const walletClient = createWalletClient({
  chain: syscoin,
  transport: custom(window.ethereum)
});

const [addressa] = await walletClient.getAddresses();


const COnnect = () => {
    const [address, setAddress] = useState('');
  
    const connectWallet = async () => {
      try {
        // Check if MetaMask is installed and available
        if (window.ethereum && window.ethereum.isMetaMask) {
          // Create a wallet client with the desired chain and transport
          const walletClient = createWalletClient({
            chain: 'syscoin', // Replace 'syscoin' with the desired chain
            transport: custom(window.ethereum), // Replace 'custom' with the desired transport
          });
  
          // Connect to MetaMask wallet
          await window.ethereum.request({
            method: 'eth_requestAccounts',
          });
  
          // Get the addresses from the wallet client
          const [address] = await walletClient.getAddresses();
  
          setAddress(address);
        } else {
          console.log('MetaMask is not installed.');
        }
      } catch (error) {
        console.error('Error connecting to MetaMask:', error);
      }
    };

    
  // Render the component only if the address is not yet defined
  if (!address) {
    return (
      <div>
        <p>Connected Address: {address}.</p>
        <button className='button' onClick={connectWallet}>Connect Wallet</button>
      </div>
    );
  }

  // Render the main app when the address is defined
  return (
    <div>
      <p>Connected Address: {address}</p>
      
     </div>
  );
};
  
  
  export default COnnect;