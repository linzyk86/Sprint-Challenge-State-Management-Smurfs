import React from 'react';
import {connect} from 'react-redux';
import {getSmurf} from '../actions/actions';
import { useEffect } from 'react';
import actions from '../actions/actions'

const handleChanges = ()=>{

}

const addSmurf = (smurf)=>{
    // return setSmurf
}


const Smurfs = ({addSmurf, isFetching, error}) =>{
   
    if (isFetching){
        return <h2> Loading...</h2>;
    }

    return(
        <div>
        <h2> </h2>
        <h3></h3>
        <h3></h3>

        <form>
            <label>Name</label>
                <input
                name = 'name'
                // value = {smurf.name}
                onChange = {handleChanges}
                id = 'name'
            />
             <label>Age</label>
                <input
                name = 'age'
                // value = {smurf.age}
                onChange = {handleChanges}
                id = 'age'
            />
             <label>Height</label>
                <input
                name = 'height'
                // value = {smurf.height}
                onChange = {handleChanges}
                id = 'height'
            />
        </form>
        <button onClick={addSmurf}
        >Add new smurf</button>
    </div>
    );
};

const mapStateToProps = state =>{
    return{
        name: state.name,
        height: state.height,
        age: state.age,
        id: state.id,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, {addSmurf}) (Smurfs);