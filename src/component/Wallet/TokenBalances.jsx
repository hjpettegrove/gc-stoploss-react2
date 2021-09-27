import { toCash, toSixDecimals } from "../../helpers/formatters";

const TokenBalanceItem = ({id, icon, symbol, amount, value_usd}) => {
    return ( 
        <div key={id} className="wallet-token-item">
            <img src={icon} alt={`token: ${icon}`}/>
            <span>{symbol}</span>
            <span className="token_value">{toSixDecimals(amount)}</span>
            <span>{toCash(value_usd)}</span>
        </div>
    );
}

const TokenBalances = ({tokens}) => {
    return ( 
        <div className="token-balance">
            <div className="wallet-token-item">
                <span>Symbol</span>
                <span>Token</span>
                <span>Balance</span>
                <span>Value USD</span>
            </div>
            {tokens.map((token) => {
                return <TokenBalanceItem {...token}/>
            })}
        </div>   
     );
}
 
export default TokenBalances;