import { useEffect, useState } from "react";
import * as WalletServices from '../../services/WalletService.js';
import '../../styles/Wallet.css';
import { toSixDecimals, toCash } from "../../helpers/formatters.js";


const WalletItem = ({token}) => {
    return ( 
        <div className="wallet-token-item">
            <img src={token.icon} alt="token image"/>
            <span>{token.symbol}</span>
            <span className="token_value">{toSixDecimals(token.amount)}</span>
            <span>{toCash(token.value_usd)}</span>
        </div>
    );
}



const formatToCash = (amount) => {
    return parseFloat(amount).toFixed(2)
}

const Wallet = ({account}) => {

    const [walletBalance, setWalletBalance] = useState(null)
    const [tokenPrices, setTokenPrices] = useState(null)

    useEffect(() => {
        let loaded = true
        //  make fetch api call and
        let api_url = `http://localhost:9013/api/wallet/balance/1/${account}`;
        fetch(api_url)
            .then(resp => resp.json())
            .then(data => {
                if(loaded) {
                    setWalletBalance(data[0])
                    console.log(data[0])
                }
            })        
        return () => loaded = false;
    }, [account] )

    return walletBalance ? ( 
        <div className="wallet">
            <div className="wallet-balance">
                <div className="wallet-item">Tokens balance: {toCash(walletBalance.balances.token_balance)}</div>
                <div className="wallet-item">Pairs balance: {toCash(walletBalance.balances.pair_balance)}</div>
                <div className="wallet-item">Total balance: {toCash(walletBalance.balances.total_balance)}</div>
            </div>
            <div className="token-balance">
                <div className="wallet-token-item">
                    <span>Symbol</span>
                    <span>Token</span>
                    <span>Balance</span>
                    <span>Value USD</span>
                </div>
                {walletBalance.assets.tokens.map((token) => {
                    return <WalletItem token={token}/>
                })}

            </div>
            <div className="pairs-balance">
                
            </div>
        </div>
    ) : (
        <div>
            <p>...loading wallet</p>
        </div>
    );
}
 
export default Wallet;