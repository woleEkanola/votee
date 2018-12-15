import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      todos: ['Go to Church', 'buy some groceries', 'Watch a Movie']
    }

    this.handleChange  = this.handleChange.bind(this)
    this.handleClick  = this.handleClick.bind(this)
    this.addTodo  = this.addTodo.bind(this)
  }
handleChange(e){
this.setState({
  content: e.target.value
})
}

  handleClick(){
let content = this.state.content

this.addTodo(content)

this.setState({
  content: ''
})
  }

addTodo(x){

  let todos = this.state.todos

  todos.push(x)

  this.setState({todos})

}

  render() {
   
   
    return (
      <div className="AppWrapper">
        <div className="App">
          <input placeholder= 'Please Enter a todo' value={this.state.content} onChange={this.handleChange} /> 
          <input type='button' value= 'submit' onClick={this.handleClick } /> 
          <Todo todos={this.state.todos} />
          
        </div>
      </div>

    );
  }
}

export default App;
