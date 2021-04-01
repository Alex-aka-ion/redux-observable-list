import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {fetchItemRequest, fetchServicesRequest} from "../actions/actionCreators";
import {Alert, Button, Spinner} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from 'react-router-dom';

export default function Details() {
    const {item, loading, error} = useSelector(state => state.item);
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {
        dispatch(fetchItemRequest(id));
    }, [dispatch]);

    const onRetry = () => {
        dispatch(fetchItemRequest(id));
    };

    if (loading) {
        return <Alert variant={'info'}><Spinner animation="border" size="sm"/></Alert>;
    }

    if (error) {
        console.log(error);
        return <Alert variant={'danger'}>Error: {error} <Button onClick={onRetry}>Попробовать снова</Button></Alert>;
    }

    return (
        <>
            <Link to='/'>Назад</Link>
            <div className="details">
                <p>Название: {item.name}</p>
                <p>Цена: {item.price}</p>
                <p> Описание: {item.content}</p>
            </div>
        </>
    );
}
