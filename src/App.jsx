import { useState } from 'react/cjs/react.development';
import './styles/App.css';
import MenuBar from './component/MenuBar/MenuBar.jsx';

function App() {

  const [account, setAccount] = useState(null);

  const handleWalletConnect = (account) => {
    console.log(account)
    setAccount(account)
  }

  return (
    <div className="App">
      <MenuBar handleWalletConnect={handleWalletConnect} />
      <div className="content container-md">
        
        <p>Account number is: {account ? account : 'wallet not connected'}</p>

      </div>
    </div>
  );
}

export default App;
