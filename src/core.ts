import axios from 'axios'
import {
    AddressData,
    AddressListResponse,
    CartDataResponse,
    CodeResponse,
    DishListInput,
    MenuResponse,
    PaymentData,
    PaymentsResponse,
    RestaurantResponse,
    UserResponse,
} from './types'

const urlV2 = 'https://www.10bis.co.il/NextApi'
const urlV1 = 'https://api.10bis.co.il/api/v1'
const requestBody = {
    culture: 'he-IL',
    uiCulture: 'he',
}
/**
 * Returns CodeResponse
 * @param email - email of 10bis user
 */
export async function getUserAuthenticationCode(email: string) {
    const { data } = await axios.post<CodeResponse>(
        `${urlV2}/GetUserAuthenticationDataAndSendAuthenticationCodeToUser`,
        { ...requestBody, email }
    )
    return data
}

/**
 * Returns UserResponse after logging user in
 * @param authenicationCode - otp recieved in sms
 * @param authenicationToken - authentication id
 * @param email - email of 10bis user
 */
export async function loginUser(
    authenticationCode: string,
    authenticationToken: string,
    email: string
) {
    const { data } = await axios.post<UserResponse>(`${urlV2}/GetUserV2`, {
        ...requestBody,
        email,
        authenticationToken,
        authenticationCode,
        shoppingCartGuid: '00000000-0000-0000-0000-000000000000',
    })
    return data
}

/**
 * Returns User's Address List
 * @param userToken - recieved in Login Response
 */
export async function getUserAddress(userToken: string) {
    const { data } = await axios.post<AddressListResponse>(
        `${urlV2}/GetUserAddresses`,
        requestBody,
        {
            headers: {
                'user-token': userToken,
            },
        }
    )
    return data
}

/**
 * Returns Lists of restaurants based on filter params
 * @param params
 */

export async function getRestaurants(
    params: Partial<{
        addressId: string | number
        cityId: number
        latitude: number
        longitude: number
        deliveryMethod: string
    }>
) {
    const { data } = await axios.get<RestaurantResponse>(
        `${urlV2}/searchRestaurants?addressId=${params.addressId}&cityId=${params.cityId}&deliveryMethod=${params.deliveryMethod}&latitude=${params.latitude}&longitude=${params.longitude}`
    )
    return data
}

/**
 * Returns User Info
 * @param userToken - recieved in Login Response
 */
export async function getUser(userToken: string) {
    const { data } = await axios.post<UserResponse>(
        `${urlV2}/GetUser`,
        requestBody,
        {
            headers: {
                'user-token': userToken,
            },
        }
    )
    return data
}
/**
 * Returns Restaurant Menu
 * @param restaurantId - get restaurant id from restaurant list request
 */
export async function getRestaurantMenu(restaurantId: string | number) {
    const { data } = await axios.get<MenuResponse>(
        `${urlV1}/Restaurants/${restaurantId}/Menu`
    )
    return data
}
/**
 *  Returns cart tate after action
 * @param userToken 
 * @param shoppingCartGuid 
 * @param dishList 
 */
export async function addDishesToCart(
    userToken: string,
    shoppingCartGuid: string,
    dishList: DishListInput[]
) {
    const { data } = await axios.post<CartDataResponse>(
        `${urlV2}/SetDishListInShoppingCart`,
        { ...requestBody, shoppingCartGuid, dishList },
        {
            headers: {
                'user-token': userToken,
            },
        }
    )
    return data
}

/**
 * Returns payment methods 
 * @param shoppingCartGuid 
 */
export async function getPayments(shoppingCartGuid: string) {
    const { data } = await axios.get<PaymentsResponse>(
        `${urlV2}/GetPayments?shoppingCartGuid=${shoppingCartGuid}`
    )
    return data
}

/**
 * Returns cart state after action 
 * @param userToken 
 * @param shoppingCartGuid 
 * @param address 
 */
export async function setAddressInOrder(
    userToken: string,
    shoppingCartGuid: string,
    address: AddressData
) {
    const { data } = await axios.post<CartDataResponse>(
        `${urlV2}/setAddressInOrder`,
        { ...requestBody, shoppingCartGuid, ...address },
        {
            headers: {
                'user-token': userToken,
            },
        }
    )
    return data
}

/**
 * Returns cart state after current action 
 * @param userToken 
 * @param shoppingCartGuid 
 * @param payments 
 */
export async function setPaymentInOrder(
    userToken: string,
    shoppingCartGuid: string,
    payments: PaymentData[]
) {
    const { data } = await axios.post<CartDataResponse>(
        `${urlV2}/setPaymentsInOrder`,
        { ...requestBody, shoppingCartGuid, payments },
        {
            headers: {
                'user-token': userToken,
            },
        }
    )
    return data
}

/**
 * Returns Order Response 
 * @param shoppingCartGuid 
 */
export async function submitOrder(shoppingCartGuid: string) {
    const { data } = await axios.post(`${urlV2}/SubmitOrder`, {
        ...requestBody,
        shoppingCartGuid,
        dontWantCutlery: false,
        isMobileDevice: false,
    })
    return data
}
