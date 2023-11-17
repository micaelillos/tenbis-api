# 10BIS API wrapper

<p align=center>
    <img src="https://servul-api.azureedge.net/Sites/IL/mini_logos/10bis.jpg" width=250>
  <br>
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg">
<img src="https://img.shields.io/badge/License-Apache%202.0-blue.svg">
  <img src="https://img.shields.io/badge/10BIS-API-orange">
</p>

## Overview

This repo contains a fully functional typescript api wrapper to the 10bis api to be able to automate making 10bis orders.

## Get started

Install library

``` yarn add tenbis-api```

## Full Example Usage

```typescript
import api from 'tenbis-api'
const { getPayments, getTransactionReport, getUser, loadTenbisCredit } = './core'

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
```
