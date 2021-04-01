import {
    FETCH_SERVICES_FAILURE,
    FETCH_SERVICES_REQUEST, FETCH_SERVICES_SUCCESS

} from "../actions/actionTypes";

const initialState = {
    items: [],
    loading: false,
    error: null,
};

export default function listReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_SERVICES_REQUEST:
            return {...state, items: [], loading: true, error: null}
        case FETCH_SERVICES_FAILURE:
            return {...state, items: [], loading: false, error: action.payload.error.message}
        case FETCH_SERVICES_SUCCESS:
            return {...state, items: action.payload.items, loading: false, error: null}
        default:
            return state;
    }
}
