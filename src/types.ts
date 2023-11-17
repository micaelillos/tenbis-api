import { RawAxiosResponseHeaders } from 'axios'

interface BaseResponse {
    Errors: any[]
    Success: boolean
    ShoppingCartGuid: string
}

export interface CodeResponse extends BaseResponse {
    Data: CodeResponseData
}

interface CodeResponseData {
    authenticationMethod: string
    codeAuthenticationData: CodeAuthenticationData
}

interface CodeAuthenticationData {
    authenticationToken: string
    lastFourPhoneDigits: string
    sendingMethod: string
}

export interface UserResponse extends BaseResponse {
    Data: UserResponseData
    authToken: string
    refreshToken: string

}

export interface UserResponseData {
    userId: number
    firstName: string
    lastName: string
    email: string
    isUserSocialConnected: boolean
    thumbnailUrl: null
    userToken: string
    cellphone: string
    companyId: number
    isCompanyAdmin: boolean
    updatePasswordRequired: boolean
    moneycardActivationRequired: boolean
    userActivated: boolean
    isGovCompany: boolean
    isIecCompany: boolean
    RequireCaptcha: boolean
    isCompanyUser: boolean
    isVerified: boolean
    userEnabledFeatures: string[]
    loginSuccessRedirectUrl: string
    userRequiredActions: UserRequiredActions
    crossPlatformCustomerID: string
    sessionToken: string
    userActive: boolean
    wantPromotions: boolean
}

export interface UserRequiredActions {
    updateUserDetailsRequired: boolean
    moneycardActivationRequired: boolean
    updateUserDetailsForm: Object
    moneycardActivationRequiredType: string
}

export interface UserAddressResponse extends BaseResponse {
    Data: AddressData[]
}

export interface AddressData {
    addressId: number
    cityId: number
    cityName: string
    streetId: number
    streetName: string
    houseNumber: string
    apartmentNumber: string
    entrance: string
    floor: string
    comments: string
    longitude: number
    latitude: number
    nameOnDoor: string
    phone01: string
    phone02: string
    isCompanyAddress: boolean
    addressCompanyId: number
    locationType: string
    locationName: string
    restaurantDeliversToAddress: boolean
    shiftId: number
}

export interface AddressListResponse extends BaseResponse {
    Data: AddressList[]
}

interface AddressList {
    addressId: number
    cityId: number
    cityName: string
    streetId: number
    streetName: string
    houseNumber: string
    apartmentNumber: string
    entrance: string
    floor: string
    comments: string
    longitude: number
    latitude: number
    nameOnDoor: string
    phone01: string
    phone02: string
    isCompanyAddress: boolean
    addressCompanyId: number
    locationType: string
    locationName: string
    restaurantDeliversToAddress: boolean
    shiftId: number
}

export interface RestaurantResponse extends BaseResponse {
    Data: RestaurantResponseData
}

interface RestaurantResponseData {
    restaurantsList: Restaurant[]
}

interface Restaurant {
    restaurantId: number
    restaurantName: string
    localizationNames: LocalizationNames
    restaurantAddress: string
    restaurantCityName: string
    restaurantLogoUrl: string
    restaurantPhone: string
    restaurantCuisineKeysList: string[]
    restaurantCuisineTypes: RestaurantCuisineTypes
    distanceFromUser: number
    isOpenNow: boolean
    isActive: boolean
    isDeliveryEnabled: boolean
    isPickupEnabled: boolean
    openTime: string
    closeTime: string
    deliveryTimeInMinutes: number
    deliveryTimeStr: string
    estimatedArrivalTime: string
    longitude: number
    latitude: number
    deliveryRemarks: string
    numOfReviews: number
    reviewsRank: number
    reviewsRankDecimal: number
    discountPercent: number
    discountAvailable: boolean
    isKosher: boolean
    isVegan: boolean
    isGlutenFree: boolean
    isEnvironmentFriendly: boolean
    kosherString: string
    deliveryFee: number
    deliveryPriceBeforeCompanyDiscount: number
    deliveryFeeAmount: number
    minimumPriceForOrder: number
    isPooledOrderRestaurant: boolean
    pooledOrderSum: number
    estimatedNumberOfOrdersInPoolOrder: number
    tags: Tag[]
    priorityInList: number
    restaurantHeaderImageUrl: string
    isTerminalActive: boolean
    restaurantPopularityScore: number
    discountedDeliveryFee: number
    minOrderTotalForDeliveryFeeDiscount: number
    tipEnabled: boolean
    futureOrdersAvailable: boolean
    futureOrderSupported: boolean
    announcement: string
    profileImageUrl: string
    isScoober: boolean
    voucherRestaurant: boolean
    tempClosedReason: string
    futureOrderTodayBeginTime: any
    showPackingOption: boolean
    isDiningRoomRes: boolean
    businessType: number
    orderRemarks: OrderRemarks
}

interface LocalizationNames {
    he: string
    en: string
}

interface RestaurantCuisineTypes {
    pizza?: string
    salads?: string
    meatGrill?: string
    sandwichesWraps?: string
    humus?: string
}

interface Tag {
    type: string
    value: string
    imageUrl: any
    companyId: number
}

interface OrderRemarks {
    isRequired: boolean
    isVisible: boolean
    title: string
}

export interface UserResponse extends BaseResponse {
    Data: UserResponseData
}

export interface CartDataResponse extends BaseResponse {
    Data: CartData
}

interface CartData {
    user: User
    restaurant: Restaurant
    address: Address
    deliveryMethod: string
    shoppingCart: ShoppingCart
    discountCoupon: DiscountCoupon
    payments: any[]
    orderId: number
    orderDataOrderDateAndTime: OrderDataOrderDateAndTime
    permits: Permits
}
interface User {
    userId: number
    privateAddressOrdersCount: number
}
interface Restaurant {
    restaurantId: number
}

interface Address {
    addressId: number
    cityId: number
    streetId: number
    houseNumber: any
    addressCompanyId: number
}

interface ShoppingCart {
    shoppingCartGuid: string
    dishToSubmitList: DishToSubmitList[]
    billingLines: BillingLine[]
}

interface DishToSubmitList {
    dishId: number
    categoryId: number
    quantity: number
    assignedUserId: number
    dishNotes: any
    shoppingCartDishId: number
    choices: any[]
}

interface BillingLine {
    type: string
    amount: number
    priority: number
}

interface DiscountCoupon {
    id: number
    isActive: boolean
    code: any
    assignmentType: any
    valueType: any
    discountValue: number
    description: any
    benefitPayer: any
}

interface OrderDataOrderDateAndTime {
    desiredDateStr: any
    desiredTimeStr: any
}

interface Permits {
    timeLimit: TimeLimit
    minimumLimit: MinimumLimit
    taxDiscount: TaxDiscount
}

interface TimeLimit {
    active: boolean
    validTill: string
    validTillDateStr: any
    validTillTImeStr: any
}

interface MinimumLimit {
    active: boolean
    validTill: string
    validTillDateStr: any
    validTillTImeStr: any
}

interface TaxDiscount {
    active: boolean
    validTill: string
    validTillDateStr: any
    validTillTImeStr: any
}

export interface TransactionReportResponse extends BaseResponse {
    Data: TransactionReportData
}

interface TransactionReportData {
    dateBias: number
    companyAnnouncement: string
    companyReportRange: CompanyReportRange
    moneycards?: MoneycardsEntity[] | null
    debitTransfers: DebitTransfers
    reportSetting: ReportSetting
    orderList?: OrderListEntity[] | null
    totals: Totals
    userActiveOrders?: null[] | null
}

interface CompanyReportRange {
    startDateStr: string
    endDateStr: string
    compnayPayDay: number
}
interface MoneycardsEntity {
    isPrepaid: boolean
    cardDeleted: boolean
    moneycardId: number
    cardSuffix: string
    limitation: LimitationOrUsageOrBalanceOrUsageBrutoOrUsageNet
    usage: LimitationOrUsageOrBalanceOrUsageBrutoOrUsageNet
    balance: LimitationOrUsageOrBalanceOrUsageBrutoOrUsageNet
    usageBruto: LimitationOrUsageOrBalanceOrUsageBrutoOrUsageNet
    usageNet: LimitationOrUsageOrBalanceOrUsageBrutoOrUsageNet
    businessMeetingGuestTotal: number
    personalGuestTotal: number
}
interface LimitationOrUsageOrBalanceOrUsageBrutoOrUsageNet {
    monthly: number
    daily: number
    weekly: number
    hideDailyLimit: boolean
    showWeeklyLimit: boolean
}
interface DebitTransfers {
    debitTransfersFromUser?: null[] | null
    debitTransfersToUser?: null[] | null
}
interface ReportSetting {
    showTransferDebit: boolean
    showPaymentRemarks: boolean
    hideMonthlyBalanceInUserReport: boolean
    hideDailyBalanceInUserReport: boolean
    hideMoneycardLimitsAndBalance: boolean
    isIntelReport: boolean
    showEmployerEmployeePart: boolean
    isKLAReport: boolean
    showAutoRefundRemarks: boolean
    isGroupByDay: boolean
}
interface OrderListEntity {
    orderId: number
    employeePart: number
    employerPart: number
    orderType: string
    orderDate: string
    orderDateStr: string
    orderTimeStr: string
    total: number
    restaurantId: number
    restaurantName: string
    restaurantReviewsDisabled: boolean
    reviewTransactionId: string
    existTransferRequest: boolean
    inoviceUrls?: null[] | null
    payments?: PaymentsEntity[] | null
    review: Review
    transferDebit?: null
    products?: null[] | null
    isDebitTransfer: boolean
    isBarCodeOrder: boolean
    orderStatus: number
    transactionBrutoSum: number
    transactionNetSum: number
    guestType: string
    dailySum: number
}
export interface PaymentsEntity {
    paymentId: number
    transactionId: number
    cardSuffix: string
    paymentMethod: string
    total: number
    paymentRemarks: string
    prepaidBalance: number
    autoRefundRemarks: string
}
interface Review {
    reviewDate: string
    reviewDateString: string
    userId: number
    shortUserName?: null
    reviewId: number
    reviewText: string
    reviewRank: number
}
interface Totals {
    total: number
    payments?: PaymentsEntity1[] | null
    employeePartSum: number
    employerPartSum: number
}
interface PaymentsEntity1 {
    paymentId: number
    transactionId: number
    cardSuffix: string
    paymentMethod: string
    total: number
    paymentRemarks?: null
    prepaidBalance: number
    autoRefundRemarks?: null
}
export interface PaymentsResponse extends BaseResponse {
    Data: PaymentData[]
}

export interface PaymentData {
    paymentMethod: string
    creditCardType: string
    cardId: number
    cardToken: string
    userId: number
    userName: string
    cardLastDigits: string
    sum: number
    assigned: boolean
    remarks: any
    expirationDate?: string
}

/********************* API V1 TYPES ***********************/
export interface MenuResponse {
    categories: Category[]
}
interface Category {
    id: number
    name: string
    description: string
    dishes: Dish[]
}

interface Dish {
    id: number
    name: string
    description: string
    price: number
    categoryId: number
    imageUrl: string
    popular: boolean
    popularityScore: number
    enableComment: boolean
    ageRestricted: boolean
    restrictionAge: string
    pricePerMeasurementUnit: number
    measurementUnit: string
    measurementUnitScale: number
    choices: Choice[]
}

interface Choice {
    id: number
    forced: boolean
    textBeforeChoosing: string
    maxPicksAllowed: number
    subs: Sub[]
}

interface Sub {
    id: number
    price: number
    name: string
    catalogId: string
    ageRestricted: boolean
    restrictionAge: string
}

/**************** INPUT TYPES ****************/

export interface DishListInput {
    dishId: number
    shoppingCartDishId: number
    quantity: number
    assignedUserId: number
    choices: any
    dishNotes?: string
    categoryId: number
}
