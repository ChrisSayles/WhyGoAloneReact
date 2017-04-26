import React, { Component } from "react";
import { Route, Redirect, IndexRedirect, Router, IndexRoute, browserHistory } from "react-router";
import { connect } from "react-redux";
import AuthService from "./utils/AuthService";

//components
import calApp from './components/calendar/App';
//this calls all of Calendar folder from Screens component.
import CalendarContainer from './components/calendar/Screens/Calendar/Container';
import CalendarWeekPage from './components/calendar/Screens/Calendar/Week';
import EditEvent from './components/calendar/Screens/Calendar/EditEvent';
// import NotFoundView from './components/calendar/Screens/NotFound';
//calls NotFound Directory which gets a route of 404


import Wrapper from "./components/Wrapper";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import ContactComponent from "./components/contact/ContactComponent";
import ContactListComponent from "./components/contact/ContactListComponent";
import ContactNewComponent from "./components/contact/ContactNewComponent";
import ContactEditComponent from "./components/contact/ContactEditComponent";

// validate authentication for private routes
import { key1, key2 } from "./utils/keys.js";

// <Route path="/contacts" component={ContactComponent} 
//           onEnter={requireAuth}/>  

const auth = new AuthService(key1, key2);

const requireAuth = (nextState, replace) => {
    if(!auth.loggedIn()) {
        replace({ pathname: "/login" });
    }
};

export default class App extends Component {
    render() {
        const routes =
        <Route path="/" component={Wrapper} auth={auth}>
        <IndexRoute component={Home}/>
          <Route path="/home" component={Home}/>
          
          <Redirect from="/calendar" to="/calendarV" />
            <IndexRedirect to="/calendar/week" />
            <Route path="calendar" component={CalendarContainer} />
              <IndexRedirect to="week" />
              <Route path="week" component={CalendarWeekPage} />
            <Route path="calendar/event/:id" component={EditEvent} />

          <Route path="/login" component={Login} />
          <Route path="/logout" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/contacts" component={ContactComponent} />
            <Route path="/contacts/list" component={ContactListComponent} />
                  <Route path="/contacts/new" component={ContactNewComponent} />
                  <Route path="/contacts/edit" component={ContactEditComponent} />
          
          <Route path="404" component={NotFound} />
       </Route>;
        return(
            <Router history={browserHistory}>     
       {routes} 
       </Router>
        );
    }
}



const NotFound = () => (<h1 style={{textAlign: 'center', fontSize: '3em'}}> 
<span style={{color: '#808080'}}> 404! </span> <br/> This page was not found!</h1>);