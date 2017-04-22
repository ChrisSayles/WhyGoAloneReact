import React, { Component } from 'react';

class Message extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className="panel panel-default">
				<strong>{this.props.body}</strong>
				<p>{this.props.date}</p>
			</div>
		)
	}
}

module.exports = Message;