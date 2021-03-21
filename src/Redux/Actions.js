import {FILTER_CART, LOGIN_CHANGE,ORDER_BY_CHANGE,STORE_DATA,CATEGORY_CHANGE} from './ActionTypes';
export function loginChange(userData,userRef) {
    return {
        type: LOGIN_CHANGE,
        payload:userData,
        userRef:userRef
    }
}

export function storeData(inventoryData) {
    return {
        type: STORE_DATA,
        payload:inventoryData
    }
}

export function OrderBy(orderBy) {
    return {
        type: ORDER_BY_CHANGE,
        payload:orderBy
    }
}
export function Category(category) {
    return {
        type: CATEGORY_CHANGE,
        payload:category
    }
}