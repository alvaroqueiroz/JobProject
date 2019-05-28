import axios from 'axios'
import { createMessage, returnErrors  } from './messages'
import { tokenConfig } from "./auth";

import { GET_CARDS, DELETE_CARD, ADD_CARD } from './types'


export const getCards = () => (dispatch, getState) => {
    axios
    .get('/api/CardsApp/', tokenConfig(getState))
    .then(res => {
        dispatch({
            type: GET_CARDS,
            payload: res.data
        });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
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

export const addCard = card => (dispatch, getState) => {
    axios
        .post('/api/CardsApp/', card, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ addCard: "Card Added" }));
            dispatch({
                type: ADD_CARD,
                payload: res.data
            });
        })
        .catch(err => 
            dispatch(returnErrors(err.response.data, err.response.status)));
};
