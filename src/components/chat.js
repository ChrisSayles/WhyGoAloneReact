//TODO create utils folder, put my post request in there but make it a promise. put a get request in the utils too.
//chain the get request off my post request, and create message component to display them

import React, { Component } from 'react';

class Chat extends Component {

	constructor(){
		super();
		this.state = {message: ' '};
		this.handleMessageChange = this.handleMessageChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
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