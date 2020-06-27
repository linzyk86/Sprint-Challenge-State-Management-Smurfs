import axios from 'axios';

export const FETCHING_DATA_START = 'FETCHING_DATA_START';
export const FETCHING_DATA_SUCCESS = 'FETCHING_DATA_SUCCESS';
export const FETCHING_DATA_FAILURE = 'FETCHING_DATA_FAILURE';


export const getSmurf = ()=> dispatch =>{
    dispatch({type: FETCHING_DATA_START});
    axios
        .get('http://localhost:3333/smurfs')
        .then(res =>{
            console.log(res.data[0]);
            dispatch({ type : FETCHING_DATA_SUCCESS, 
            payload: res.data[0]});
            })
            .catch(err=>{;
            console.log(err);
            dispatch({
                type: FETCHING_DATA_FAILURE,
                payload: ''
            });
            });
        
};