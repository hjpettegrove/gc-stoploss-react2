const API_URL_BASE = 'http://localhost:9013'


export function getWalletBalance(account, network = 1) {
    const api_wallet_balance_url = `${API_URL_BASE}/api/wallet/balance/${network}/${account}`
    return fetch(api_wallet_balance_url)
            .then(data => data.json())
}