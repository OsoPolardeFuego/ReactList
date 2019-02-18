import React, { Component } from 'react';
import PropTypes from 'prop-types'



class TodoItem extends Component {
	getStyle = () => {
		return {
		textDecoration: this.props.todo.completed ? 'line-through':'none',
		background:"#f4f4f4",
		padding: '10px',
		borderBottom: '1px #ccc dotted'
		}
	}

	buttonStyle = () => {
		return {
			marginLeft:'14px',
			background:"#bde"
		}
	}



  render() {
  	const {id,title}  = this.props.todo
   return (
   	<div style={this.getStyle()}>
   	<p>
   	<input type="checkbox" onChange ={this.props.markComplete.bind(this,id)}/>
   	{title}
   	<button style={this.buttonStyle()} onClick={this.props.deleteItem.bind(this,id)}>x</button>
   	</p>
   	</div>
   	);
}
}

TodoItem.propTypes = {
	todos:PropTypes.object.isRequired
}


export default TodoItem;
