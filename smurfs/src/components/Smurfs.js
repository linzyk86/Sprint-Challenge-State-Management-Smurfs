import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getSmurf } from '../actions/actions';
import { useEffect } from 'react';
import actions from '../actions/actions'
import axios from 'axios';

const Smurfs = ({ getSmurf, smurf, isFetching, error }) => {
    //const [newSmurf, setNewSmurf] = useState(smurf);
    const[newSmurf, setNewSmurf]=useState({
        id:Date.now(),
        name: smurf.name,
        height: smurf.height,
        age: smurf.height,
    });

    useEffect(() => {
        getSmurf();
    }, []);

    if (isFetching) {
        return <h2> Loading...</h2>;
    }
    const handleChanges = (e) => {
        setNewSmurf(
            { ...newSmurf, [e.target.name]:e.target.value }
        )    
    };

    const addSmurf = (e, newSmurf) => {
        newSmurf = {
            name: e.target.name,
            age: e.target.age,
            height: e.target.height
        }
        return {
            ...newSmurf, name: newSmurf.name, age: newSmurf.age, height: newSmurf.height
        }     
    }

    const formSubmit = e => {
        e.preventDefault();
        console.log("form submitted!");
        console.log(smurf);
        console.log(smurf.name)
        axios.post("http://localhost:3333/smurfs", newSmurf)
            .then(response => console.log(response))
            .catch(err => console.log(err));

    };


    return (
        <div>
            <div> 
                <h2> Name: {smurf.name}</h2>
                <h3>Age: {smurf.age}</h3>
                <h3>Height: {smurf.height}</h3>  
            </div>
           
            
            <form onSubmit={addSmurf}>
                <label>Name</label>
                <input
                    name='name'
                    value={newSmurf.name}
                    onChange={handleChanges}
                    id='name'
                />
                <label>Age</label>
                <input
                    name='age'
                    value={newSmurf.age}
                    onChange={handleChanges}
                    id='age'
                />
                <label>Height</label>
                <input
                    name='height'
                    value={newSmurf.height}
                    onChange={handleChanges}
                    id='height'
                />

                <button onClick={formSubmit}
                >Add new smurf</button>
            </form>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        smurf: state.smurf
    };
};

export default connect(mapStateToProps, { getSmurf })(Smurfs);