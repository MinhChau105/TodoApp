import React, { Component } from 'react';
import Header from './Components/Header/Header';
import BtnEdit from './Components/btnEdit/btnEdit';
import BtnDel from './Components/btnDel/btnDel';
import BtnAdd from './Components/btnAdd/btnAdd';
import Input from './Components/Input/Input';
import ListTodo from './Components/list/List';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      todos: [],
      currentValue: ""
    }
  }


  inputOnchange = val => {
    console.log(val.target.value);
    this.setState({
      currentValue: val.target.value
    })
  }

  onClickAdd = () => {
    let copyList = this.state.todos.slice();
    copyList.push(this.state.currentValue);
    this.setState({
      todos: copyList,
      currentValue: ""
    })
  }

  removeList = id =>{
    let todosCopy = this.state.todos.slice();
    todosCopy.splice(id, 1);
    console.log("asc");
    this.setState({
      todos: todosCopy
    });
  }


  render() {
    let listItems = this.state.todos.map((val, key) =>{
      return (
        <React.Fragment>
          <ListTodo 
            key= {key} 
            list= {val} 
          />
          <BtnDel removeList = {()=>this.removeList(key)}/>
        </React.Fragment>
      )
    })

    return (
      <div>
        <Header/>
        <Input inputOnchange = {(val)=>this.inputOnchange(val)} />

        {/* nut add này làm 2 cách truyền, note để nhớ */}
        <BtnAdd onClickAdd ={()=>this.onClickAdd()}/>
        <br/>

        {this.state.todos.length === 0 
        ? 
          "Empty!" 
        : 
          <ol>{listItems}</ol> }
        
      </div>
    );
  }

}

export default App;
