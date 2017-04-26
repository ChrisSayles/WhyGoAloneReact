import 'babel-polyfill';
import 'regenerator-runtime/runtime';
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store";
import {Router, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {withBasename} from './helpers/History';
import rootSaga from './sagas';
import Routes from "./routes";

const store = configureStore();
const history = syncHistoryWithStore(withBasename(browserHistory), store);
//we. . .need this for tap injection;
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

//WRITE AN APP TO KEEP YOUR PORTFOLIO RUNNING DURING OPTIMAL PERFORMANCE;
ReactDOM.render(
	<Provider store={store}>
	<Routes/>
	</Provider>, document.getElementById("app"));