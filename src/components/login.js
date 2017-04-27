import React, { Component } from 'react';

class Login extends Component {

	handleLocaleChange(e) {
		this.setState({lang: e.target.value});
	}


	render(){
		return(
			
			<div className="header headerBackground">
			<div className="navbar navbar-default headerBackground logoArea ">
				<div className="pizzaLogo"></div>
				<div>
				<button className="loginButton mdl-button mdl-js-button mdl-js-ripple-effect">
  				<i className="material-icons iconSize loginButton">account_circle</i>Sign-in with Google
				</button>
				</div>
				<div>
					<select onChange={this.handleLocaleChange}>
						<option value="en">English</option>
						<option value="zh">Chinese</option>
       				 </select>
				</div>
			    
			</div>
			</div>
		

			)
	}
}


export default Login;