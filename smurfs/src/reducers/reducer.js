import {FETCHING_DATA_START} from '../actions/actions';
import {FETCHING_DATA_SUCCESS} from '../actions/actions';

const initialState = {
    name: '',
    age: null,
    height: '',
    isFetching: false,
    error: ""
};

export const reducer = (state = initialState, action) =>{
    switch(action.type){
        case 'FETCHING_DATA_START':
            return state;

        case 'FETCHING_DATA_SUCCESS':
            return state
        default:
            return state;
    }
};