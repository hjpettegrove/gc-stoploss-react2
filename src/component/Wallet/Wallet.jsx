import { useEffect, useState } from "react";
//import * as WalletServices from '../../services/WalletService.js';
import '../../styles/Wallet.css';
import { toSixDecimals, toCash } from "../../helpers/formatters.js";
import TokenBalances from "./TokenBalances.jsx";


const Wallet = ({account}) => {

    const [walletBalance, setWalletBalance] = useState(null)

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

            <TokenBalances tokens={walletBalance.assets.tokens} />

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