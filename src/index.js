
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Interest from './components/interest';
import InterestList from './components/interestList';
import Login from './components/login';
import Map from './components/map';
import Chat from './components/chat';


const App = function(){
    return <div className="container">
                <div className="row">
                    <Login />
                </div>
                <div className="row">
                    <InterestList />
                    <Interest />
                </div>
                <div className="row">
                    <Map />
                </div>
                <div className="row">
                    <Chat />
                </div>
          </div>;
}



ReactDOM.render( < App / > , document.querySelector('.container'));