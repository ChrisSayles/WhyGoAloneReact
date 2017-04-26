//TODO make it so initial state loads up all prev messages
import React, { Component } from 'react';
import Message from './message';
import helpers from '../../../../utils/helpers.js';

class Chat extends Component {

	constructor(){
		super();
		this.state = {message: ''};
		this.handleMessageChange = this.handleMessageChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.showMessages = this.showMessages.bind(this);
	}


	showMessages(){
		if(this.props.messages){
			return this.props.messages.map((x, i) => <Message key={i} body={x.body} date={x.date}/>);
		}
		return "Messages will be displayed here."
	}

	handleMessageChange(event){
		this.setState({message: event.target.value});
	}

	handleSubmit() {
		this.props.setMessage(this.state.message);
		helpers.createMessage(this.state.message);
		this.setState({ message: '',});
	}

	render(){
		return(

			<div className="panel panel-default panel-border bottom">
  				<h4 className="panel-heading heading-area textStyle">Chat</h4>
  				<div className="panel-body chatBox">
  					<div>{this.showMessages()}</div>
  				</div>
  				<form id="chat-form" onSubmit={(event) => {event.preventDefault(); this.handleSubmit();}}>
		            <div className="form-group">
		              <label htmlFor="message">message</label>
		              <input value={this.state.message} onChange={this.handleMessageChange} className="form-control" id="message" placeholder="" />
		            </div>
		       	    <button type="submit" className="btn btn-default">Send</button>
			    </form>
			</div>
			)
	}
}

export default Chat;