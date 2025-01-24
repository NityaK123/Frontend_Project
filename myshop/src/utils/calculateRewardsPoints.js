
export const calculateRewardsPoint = (price) => {
    const totalprice = Math.floor(price)
    return totalprice > 100 ? (totalprice - 100) * 2 + 50 : (totalprice > 50) ? totalprice - 50 : 0 
}