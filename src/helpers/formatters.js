export const toSixDecimals = (amount) => {
    return parseFloat(amount).toFixed(6);
}

export const toCash = (amount) => {
    return "$" + (parseFloat(amount).toFixed(2)).toString()
}