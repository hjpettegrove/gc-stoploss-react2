import { useEffect, useState } from "react";


const walletItem = ({id, symbol, icon, amount}) => {
    return ( 

     );
}
 
export default walletItem;


const Wallet = ({account}) => {

    const [walletBalance, setWalletBalance] = useState(null)

    useEffect(() => {
        //  make fetch api call and
        
    }, [account] )

    return ( 
        <div>

        </div>
    );
}
 
export default Wallet;