import React, { Component } from 'react';

var App = React.createClass({
  // ...
  componentWillMount: function() {
      this.lock = new Auth0Lock('W42OG1f82ibOZxOw0WJjoBn38ITq3UMg', 'antoniojgage.auth0.com');
  },
  render: function() {
    return (<Home lock={this.lock} />);
  }
});