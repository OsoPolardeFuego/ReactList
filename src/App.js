import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos'
import AddItem from './components/AddItem'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import About from './components/pages/About'

class App extends Component {
  state = {
    todos:[
  {id: 1, title:'take out trash', completed:false}, 
  {id: 2, title:'take out food', completed:false}
    ]
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(val=>{
        if((val.id)===id){
          val.completed = !val.completed
        }
        return val
      })
    })
  }

  deleteItem = (id) => {
    console.log('test')
    this.setState({
      todos:[...this.state.todos.filter(val=>
        val.id !==id)] })
  }

  addItem = (title) => {
    var newItem = {
      id:this.state.todos.length + 1,
      title:title,
      completed:false
    }
    this.setState({todos:[...this.state.todos,newItem]})
  }



render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Route exact path="/" render={props => (
              <React.Fragment>
              <h1>hi justin</h1>
              <AddItem addItem = {this.addItem}/>
              <Todos deleteItem={this.deleteItem} markComplete = {this.markComplete} todos={this.state.todos}/>
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>  
        </div>
      </Router>
    );
  }
}

export default App;
