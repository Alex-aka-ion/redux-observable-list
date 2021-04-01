import {
    FETCH_ITEM_FAILURE,
    FETCH_ITEM_REQUEST, FETCH_ITEM_SUCCESS

} from "../actions/actionTypes";

const initialState = {
    item: {
        id: null,
        name: '',
        price: null,
        content: ''
    },
    loading: false,
    error: null,
};

export default function itemReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_ITEM_REQUEST:
            return {...state, loading: true, error: null}
        case FETCH_ITEM_FAILURE:
            return {...state, loading: false, error: action.payload.error.message}
        case FETCH_ITEM_SUCCESS:
            return {...state, item: action.payload.item, loading: false, error: null}
        default:
            return state;
    }
}
