import { useEthers } from '@usedapp/core';
import { useEffect } from 'react';
import '../../styles/MenuBar.css';

const MetaMaskConnector = ({handleWalletConnect, handleWalletDisconnect}) => {

    const { activateBrowserWallet, account, deactivate } = useEthers();
    //  FIXME - Does not appear to actually disconnect metamask wallet
    const disconnect = handleWalletDisconnect(deactivate);

    useEffect(() => {
        handleWalletConnect(account)
    }, [account, handleWalletConnect])

    return account ? ( 
            <div className="connect-button d-inline-flex justify-content-evenly account-info">
                {/*<p>{etherBalance && parseFloat(formatEther(etherBalance)).toFixed(5)} ETH</p>*/}
                <p className="account-number pb-0 py-3 px-3">{account && `${account.slice(0,6)}...${account.slice(account.length-4, account.length)}`}</p>
                <button onClick={disconnect} type="button" className="btn btn-secondary btn-sm m-2">
                    Disconnect wallet
                </button>
            </div>
        ) : (
            <button onClick={activateBrowserWallet} type="button" className="btn btn-primary btn-sm m-2">
                Connect Wallet
            </button>            
        );
}



const MenuBar = (props) => {
    return ( 
        <div className="container-md d-flex flew-row justify-content-between" >
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/wallet">Wallet</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Link</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="d-inline-flex d-flex flew-row justify-content-between ">
                <MetaMaskConnector handleWalletConnect={props.handleWalletConnect} handleWalletDisconnect={props.handleWalletDisconnect} />
            </div>
        </div>
    );
}
 
export default MenuBar;