import React, {useState} from 'react';
import {connect} from 'react-redux';
import {getSmurf} from '../actions/actions';
import { useEffect } from 'react';
import actions from '../actions/actions'

const Smurfs = ({getSmurf, smurf, addSmurf, handleChanges,isFetching, error}) =>{
    const[newSmurf, setNewSmurf] = useState(smurf);

     useEffect(()=>{
        getSmurf();
    }, []);
   
    if (isFetching){
        return <h2> Loading...</h2>;
    }
// const handleChanges = (e)=>{
//     setNewSmurf({e.target.value
//     });
// }

//  const addSmurf = (newSmurf)=>{
//     // return setSmurf
// // }

    return(
        <div>
        <h2> {smurf.name}</h2>
        <h3>{smurf.age}</h3>
        <h3>{smurf.height}</h3>

        <form>
            <label>Name</label>
                <input
                name = 'name'
                value = {newSmurf.name}
                onChange = {handleChanges}
                id = 'name'
            />
             <label>Age</label>
                <input
                name = 'age'
                value = {newSmurf.age}
                onChange = {handleChanges}
                id = 'age'
            />
             <label>Height</label>
                <input
                name = 'height'
                value = {newSmurf.height}
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
      smurf:state.smurf
    };
};

export default connect(mapStateToProps, {getSmurf}) (Smurfs);