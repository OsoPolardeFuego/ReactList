import React, {Component} from 'react'

class AddItem extends Component{
	state = {
		title:''
	}

	onChange = (e) =>{
		this.setState({
			title: e.target.value
		})
	}

	onSubmit = (e) => {
		e.preventDefault();
		this.props.addItem(this.state.title);
		this.setState({title:''})
	}


	render(){
		return (
			<form onSubmit={this.onSubmit}>
			<input type="text" 
			value ={this.state.title} 
			name="title" 
			placeholder="add todo.."
			onChange={this.onChange}
			/>
			<input type="submit" value="submit" className="btn"/>
			</form>
			)
	}
}

export default AddItem 