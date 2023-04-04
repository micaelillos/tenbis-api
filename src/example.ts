import {
    addDishesToCart,
    getPayments,
    getRestaurantMenu,
    getRestaurants,
    getUser,
    getUserAddress,
    setAddressInOrder,
    setPaymentInOrder,
    submitOrder,
} from './core'

// Login with User Token
const user = await getUser('********************')

// Get User's id, address, token and current shopping cart id

const { userId: assignedUserId, userToken } = user.Data
const { Data: addressList } = await getUserAddress(userToken)
const shoppingCartId = user.ShoppingCartGuid

// Set the deleviry address in the current order
await setAddressInOrder(user.Data.userToken, shoppingCartId, addressList[0])

// Get Restaurants and seach for a restaurant called supersal
let restaurants = await getRestaurants({
    addressId: addressList[0].addressId,
    deliveryMethod: 'delivery',
})
let supersalRestaurant = restaurants.Data.restaurantsList.filter((r) =>
    r.localizationNames.en.includes('Shufersal')
)[0]

// Get Menu of supersal and select a dish that costs 50
const menu = await getRestaurantMenu(supersalRestaurant.restaurantId)
const dishes = menu.categories.flatMap((category) => category.dishes)
const { id: dishId, categoryId } = dishes.filter((dish) => dish.price === 50)[0]

// Add one of the dish that costs 50 to the cart
await addDishesToCart(userToken, shoppingCartId, [
    {
        assignedUserId,
        dishId,
        categoryId,
        quantity: 1,
        shoppingCartDishId: 1,
        choices: [],
        dishNotes: null,
    },
])

// Get available payment methods
const payments = await getPayments(shoppingCartId)

// Set the second available payment method as the desired payment method
await setPaymentInOrder(user.Data.userToken, shoppingCartId, [payments.Data[2]])

// Order the cart
const submitOrderResponse = await submitOrder(shoppingCartId)
console.log(submitOrderResponse)
