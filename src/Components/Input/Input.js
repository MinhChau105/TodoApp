import './Input.css';
import React, { Component } from 'react';

export class Input extends Component {
    constructor(){
        super()
        this.state = {
        }
      }

    render() {
        return (
            <input onChange= {this.props.inputOnchange}   placeholder="Type somthing..." />
        );
    }
}

export default Input;
