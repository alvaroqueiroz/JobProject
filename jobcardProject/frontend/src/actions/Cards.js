import axios from 'axios'
import { createMessage } from './messages'

import { GET_CARDS, DELETE_CARD, ADD_CARD, GET_ERRORS } from './types'


export const getCards = () => dispatch => {
    axios.get('/api/CardsApp/')
    .then(res => {
        dispatch({
            type: GET_CARDS,
            payload: res.data
        });
    }).catch(err => console.log(err));
};

export const deleteCard = (id) => dispatch => {
    axios.delete(`/api/CardsApp/${id}`)
    .then(res => {
        dispatch(createMessage({ deleteCard: "Card Added" }));
        dispatch({
            type: DELETE_CARD,
            payload: id
        });
    }).catch(err => console.log(err));
};

export const addCard = (card) => dispatch => {
    axios.post('/api/CardsApp/', card)
    .then(res => {
        dispatch(createMessage({ addCard: "Card Added" }));
        dispatch({
            type: ADD_CARD,
            payload: res.data
        });
    }).catch(err => {
        const erros = {
            msg: err.response.data,
            status: err.response.status
        };
        dispatch({
            type: GET_ERRORS,
            payload: erros
        });
    });
};
