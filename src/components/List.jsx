import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchServicesRequest} from "../actions/actionCreators";
import {Spinner, Alert, Button} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function List() {
    const {items, loading, error} = useSelector(state => state.list);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchServicesRequest());
    }, [dispatch]);

    const onRetry = () => {
        dispatch(fetchServicesRequest());
    };

    if (loading) {
        return <Alert variant={'info'}><Spinner animation="border" size="sm"/></Alert>;
    }

    if (error) {
        console.log(error);
        return <Alert variant={'danger'}>Error: {error} <Button onClick={onRetry}>Попробовать снова</Button></Alert>;
    }

    return (
        <ul>
            {items.map(o => <li key={o.id}><Link to={`/${o.id}/details`}>{o.name}</Link></li>)}
        </ul>
    )
}
