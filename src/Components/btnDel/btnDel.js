import React, {Component} from 'react';
import './btnDel.css';
const BtnDel = props => {
    return (
        <button onClick = {props.removeList} type="button" className="btn btn-secondary">Remove</button>
    )
}

export default BtnDel;