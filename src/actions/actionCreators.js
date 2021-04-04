import {
    FETCH_ITEM_FAILURE,
    FETCH_ITEM_REQUEST,
    FETCH_ITEM_SUCCESS,
    FETCH_SERVICES_FAILURE,
    FETCH_SERVICES_REQUEST,

    FETCH_SERVICES_SUCCESS

} from "./actionTypes";

export function fetchServicesRequest() {
    return {type: FETCH_SERVICES_REQUEST};
}

export function fetchServicesFailure(error) {
    return {type: FETCH_SERVICES_FAILURE, payload: {error}}
}

export function fetchServicesSuccess(items) {
    return {type: FETCH_SERVICES_SUCCESS, payload: {items}}
}

export function fetchItemRequest(id) {
    return {type: FETCH_ITEM_REQUEST, payload: {id}};
}

export function fetchItemFailure(error) {
    return {type: FETCH_ITEM_FAILURE, payload: {error}}
}

export function fetchItemSuccess(item) {
    return {type: FETCH_ITEM_SUCCESS, payload: {item}}
}
