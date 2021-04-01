import {ofType} from "redux-observable";
import {FETCH_ITEM_REQUEST, FETCH_SERVICES_REQUEST} from "../actions/actionTypes";
import {catchError, map, retry, switchMap, tap} from "rxjs/operators";
import {
    fetchItemFailure,
    fetchItemSuccess,
    fetchServicesFailure,
    fetchServicesSuccess
} from "../actions/actionCreators";
import {ajax} from "rxjs/ajax";
import {of} from "rxjs";

export const fetchServicesEpic = action$ => action$.pipe(
    ofType(FETCH_SERVICES_REQUEST),
    switchMap((o) => ajax.getJSON(`${process.env.REACT_APP_API_URL}`).pipe(
        map(o => fetchServicesSuccess(o)),
        catchError(e => of(fetchServicesFailure(e)))
    )),
);

export const fetchItemEpic = action$ => action$.pipe(
    ofType(FETCH_ITEM_REQUEST),
    switchMap((o) => ajax.getJSON(`${process.env.REACT_APP_API_URL}/${o.payload.id}`).pipe(
        map(o => fetchItemSuccess(o)),
        catchError(e => of(fetchItemFailure(e)))
    )),
);
