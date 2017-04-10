
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
                        <div className="col-md-12">
                             <Login />
                        </div>
                </div>
                <div className="row">
                        <div className="col-md-4">
                            <div class="row">
                                <div className="col-md-12">
                                    <InterestList />
                                </div>
                                <div className="col-md-12">
                                    <Interest />
                                </div>
                                </div>
                            </div>
                        <div className="col-md-4">
                            <Map />
                        </div>
                        <div className="col-md-4">
                            <Chat />
                        </div>
                </div>

        
            </div>;
}

 


ReactDOM.render( < App / > , document.querySelector('.container'));