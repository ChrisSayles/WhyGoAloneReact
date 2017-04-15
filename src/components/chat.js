//TODO put my post request in utils folder but make it a promise. put a get request in the utils too.
//chain the get request off my post request, and fix message component to display them

import React, { Component } from 'react';
import Message from './message';

class Chat extends Component {

	constructor(){
		super();
		this.state = {message: ' '};
		this.handleMessageChange = this.handleMessageChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.showMessages = this.showMessages.bind(this);
	}


	componentDidUpdate() {
		if(!this.state.messages){
			helpers.fetchMessages().then(function(data){
				this.setState({messages: data});
			}.bind(this));
		}
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

		var body = JSON.stringify({message: this.state.message});

		var myInit = {
			method: "POST",
			headers: {
        		'Accept': 'application/json',
        		'Content-Type': 'application/json'
      		},
			body: body
		}

		var messagePostRequest = new Request("/newMessage", myInit);

		fetch(messagePostRequest)
			.then(response => response.json())
			.then((responseData) => { 
				console.log("responseData: " + responseData);
				return(responseData);
			})
			.catch(err => console.log(err));

		this.setState({ message: '',});
	}

	render(){
		return(

			<div className="panel panel-default panel-border">
  				<h4 className="panel-heading heading-area textStyle">Chat</h4>
  				<div className="panel-body chatBox">
  				  <div>{this.showMessages()}</div>
  				  <form onSubmit={(event) => {event.preventDefault(); this.handleSubmit();}}>
		            <div className="form-group">
		              <label htmlFor="message">message</label>
		              <input value={this.state.message} onChange={this.handleMessageChange} className="form-control" id="message" placeholder="" />
		            </div>
		       	    <button type="submit" className="btn btn-default">Send</button>
			      </form>
  				</div>
			</div>
			)
	}
}

export default Chat;