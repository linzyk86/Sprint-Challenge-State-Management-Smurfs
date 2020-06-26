// import {FETCHING_QUOTE_START} from '../actions/actions';
// import {FETCHING_QUOTE_SUCCESS} from '../actions/actions';

const initialState = {
    quote: null,
    isFetching: false,
    error: ""
};

export const reducer = (state = initialState, action) =>{
    switch(action.type){
        case '':
            return state;

        case ' ':
            return state
        default:
            return state;
    }
};