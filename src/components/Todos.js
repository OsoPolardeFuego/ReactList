import React, { Component } from 'react';
import TodoItem from "./TodoItem"
import PropTypes from 'prop-types'


class Todos extends Component {

  render() {
    return this.props.todos.map((val)=>{
    	return <TodoItem markComplete ={this.props.markComplete} deleteItem={this.props.deleteItem} key = {val.id} todo = {val}/>
    })
  }
}

Todos.PropTypes = {
	todos:PropTypes.array.isRequired
}

export default Todos;