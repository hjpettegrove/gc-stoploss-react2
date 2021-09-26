import { useState } from 'react/cjs/react.development';
import './styles/App.css';
import MenuBar from './component/MenuBar/MenuBar.jsx';
import Wallet from './component/Wallet/Wallet.jsx'

function App() {

  const [account, setAccount] = useState(null);

  const handleWalletConnect = (account) => {
    setAccount(account)
  }

  const handleWalletDisconnect = (cb = null) => {
    setAccount(null);
    return cb;
  }

  return (
    <div className="App">
      {/*FIXME - Need to have some kind custom diconnect so as to also update the account value to null*/}
      <MenuBar handleWalletConnect={handleWalletConnect} handleWalletDisconnect={handleWalletDisconnect}/>
      <div className="content container-md">
        
        <p>Account number is: {account ? account : 'wallet not connected'}</p>

        <Wallet account={account} />

      </div>
    </div>
  );
}

export default App;
