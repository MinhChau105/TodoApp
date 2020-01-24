import './btnAdd.css';
import React, { Component } from 'react';

export class BtnAdd extends Component {
    constructor(){
        super();
    }


    // onClickAdd = () => {
    //     let copyList = this.state.todos.slice();
    //     copyList.push(this.state.currentValue);
    //     console.log("ok");
    //     this.setState({
    //       todos: copyList,
    //       currentValue:""
    //     })
    //   }

    render() {
        
        return (
           <button onClick={this.props.onClickAdd} className="btn btn-primary">
               Add
            </button>
           // <button onClick={()=>{this.onClickAdd()}}>Add</button>
        );
    }
}

export default BtnAdd;

