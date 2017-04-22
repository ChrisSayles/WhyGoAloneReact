
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Interest from './components/interest';
import InterestList from './components/interestList';
import Login from './components/login';
import Map from './components/map';
import Chat from './components/chat';
import Footer from './components/footer';
import helpers from './utils/helpers.js';

<<<<<<< HEAD
<<<<<<< HEAD
const App = function(){
    return <div>
                <Login />
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="row">
                                <div className="col-md-12">
                                    <InterestList />
                                </div>
                                <div className="col-md-12 ">
                                    <Interest />
                                </div>
=======
=======

>>>>>>> master
class App extends Component {

    constructor(){
        super();

        this.state = {messages: ''};
        this.setMessage = this.setMessage.bind(this);

    }

    setMessage(message){
        this.setState({ message: message });
    }

    componentDidUpdate() {
        console.log('component did indeed update');
        helpers.fetchMessages().then(function(data){
            this.setState({messages: data});
        }.bind(this));
    }

    render() {
        return <div>

                             <Login />


                    <div className="container">
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
<<<<<<< HEAD
>>>>>>> master
=======

>>>>>>> master
                                </div>
                            <div className="col-md-6">
                                <Map />
                            </div>
                            <div className="col-md-3">
                                <Chat setMessage={this.setMessage} messages={this.state.messages}/>
                            </div>

                    </div>
                    </div>
                     <div className="row">
                                    <div className="col-md-12">
                                <Footer />
                            </div>
<<<<<<< HEAD
<<<<<<< HEAD
                        <div className="col-md-6">
                            <Map />
                        </div>
                        <div className="col-md-3">
                            <Chat />
                        </div>       
                    </div>
                </div>
                <div className="footer">
                    <div className="row">
                        <div className="col-md-12">
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>;
=======
=======

>>>>>>> master
                    </div>

                </div>;
    }
<<<<<<< HEAD
>>>>>>> master
=======

>>>>>>> master
}




ReactDOM.render( < App / > , document.querySelector('.root'));
