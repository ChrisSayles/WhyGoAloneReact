
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Interest from './components/interest';
import InterestList from './components/interestList';
import Login from './components/login';
import Map from './components/map';
import Chat from './components/chat';
import Footer from './components/footer';
import Filters from './components/filters';
import Slider from './components/slider';
import helpers from './utils/helpers.js';
import IntlMixin from 'react-intl';
//import i18nLoader from '../i18n';
var i18nLoader = require('../i18n');


class App extends Component {

    constructor(){
        super();
        Object.assign(this, IntlMixin);
        this.state = {messages: ''};
        this.setMessage = this.setMessage.bind(this);
        this.setLang = this.setLang.bind(this);

    }
    //todo: put i18nLoader(e.target.value, this.setProps, this);
    //inside componentDidUpdate

    setMessage(message){
        this.setState({ message: message });
    }

    setLang(lang) {
      this.setState({lang: lang});
    }

    componentDidUpdate() {
        console.log('component did indeed update');
        helpers.fetchMessages().then(function(data){
            this.setState({messages: data});
        }.bind(this));

        i18nLoader(e.target.value, this.setProps, this);
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
                                    <div className="col-md-12 ">
                                        <Filters />
                                    </div>
                                </div>
                        </div>
                    <div className="col-md-6">
                                <Map />
                    </div>
                    <div className="col-md-3">
                            <Chat setMessage={this.setMessage} messages={this.state.messages}/>
                    </div>        
                    </div>
                    </div>
                    <div className="footer">
                        <Footer />
                    </div>     
            </div>;
    }
}

function renderApp(i18n) {

  ReactDOM.render( <App {...i18n}/> , document.querySelector('.root'));

}

var defaultLocale = document.documentElement.getAttribute('lang');

i18nLoader(defaultLocale, renderApp);



