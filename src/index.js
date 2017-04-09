
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Interest from './components/interest';
import InterestList from './components/interestList';
import Login from './components/login';
import Map from './components/map';
import Chat from './components/chat';


const App = function(){
    return <div className="container">
                <div className="row col-sm-12">
                    <Login />
                </div>
                <div className="content">
                    <div className="row col-sm-3">
                        <InterestList />
                        <Interest />
                    </div>
                    <div className="row col-sm-6">
                        <Map />
                    </div>
                <div className="row col-sm-3">
                    <Chat />
                </div>
                </div>
          </div>;
}



ReactDOM.render( < App / > , document.querySelector('.container'));