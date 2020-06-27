import {FETCHING_DATA_START} from '../actions/actions';
import {FETCHING_DATA_SUCCESS} from '../actions/actions';

const initialState = {
    smurf:[],
    isFetching: false,
    error: ""
};

export const reducer = (state = initialState, action) =>{
    switch(action.type){
        case 'FETCHING_DATA_START':
            return {...state, isFetching: true,
            error: ""};

        case 'FETCHING_DATA_SUCCESS':
            console.log(state);
             return {
            ...state,
            smurf: action.payload,
            isFetching: false,
            error: ''
      };
        default:
            return state;
    }
};