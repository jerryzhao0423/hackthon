import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { Route, Router} from 'react-router';
import App from "./App";
import NewIssue from "./components/NewIssue";
import IssueList from "./components/IssueList";

const history = createHistory();
const router=routerMiddleware(history);

const enhancer=applyMiddleware(thunk, router);
const store=createStore(enhancer);


ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <div>
                <Route exact path='/' component={App}/>
                <Route path='/new-issue/' component={NewIssue}/>
                <Route path='/issue-list/' component={IssueList}/>
            </div>
        </Router>
    </Provider>
    ,document.getElementById('root')
)