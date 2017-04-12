
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Interest from './components/interest';
import InterestList from './components/interestList';
import Login from './components/login';
import Map from './components/map';
import Chat from './components/chat';
import Footer from './components/footer';

const App = function(){
    return <div className="container-fluid">
                <div className="row">
                        <div className="header">
                             <Login />
                        </div>
                </div>
                <div className="row">
                        <div className="col-md-3">
                            <div className="row">
                                <div className="col-md-12">
                                    <InterestList />
                                </div>
                                <div className="col-md-12 ">
                                    <Interest />
                                </div>
                                </div>
                            </div>
                        <div className="col-md-6">
                            <Map />
                        </div>
                        <div className="col-md-3">
                            <Chat />
                        </div>
                        <div>
                            <Footer />
                        </div>
                </div>

        
            </div>;
}

 


ReactDOM.render( < App / > , document.querySelector('.container'));