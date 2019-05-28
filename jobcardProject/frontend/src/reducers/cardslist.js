import { GET_CARDS, DELETE_CARD, ADD_CARD } from '../actions/types.js';

const initialState = {
    cardslist: []
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_CARDS:
            return { ...state,
                cardslist: action.payload
            };
        case DELETE_CARD:
            return {
                ...state,
                cardslist: state.cardslist.filter(card => card.id !== action.payload)
            }
        case ADD_CARD:
            return {
                ...state,
                cardslist: [...state.cardslist, action.payload]
            }
        default:
            return state;
    }
};