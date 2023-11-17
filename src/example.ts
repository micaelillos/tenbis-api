import { getPayments, getTransactionReport, getUser, loadTenbisCredit } from './core'

// Example to load user credit with api
// More functionality is implemented - searching for restaurants, adding to cart, submiting orders
try {
 // Login with User Token
    const user = await getUser('***************')

 // Get User's id, address, token and current shopping cart id
    const { userId: assignedUserId, userToken } = user.Data
    const { refreshToken, authToken } = user
    const shoppingCartId = user.ShoppingCartGuid

    // Get moneycards
    const moneycards = await getPayments(shoppingCartId)
    console.log(moneycards)

    // load credit of remaining usage diff 50 shekels
    const transactionReport = await getTransactionReport(userToken)
    const usage = transactionReport.Data.moneycards[0].usage.daily
    await loadTenbisCredit(100 - usage, moneycards.Data[0].cardId)

} catch (e) {
    console.log(e.message)
}


