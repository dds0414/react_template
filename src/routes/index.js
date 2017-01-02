import React from 'react'
import { Route,Router,hashHistory } from 'react-router'
import App from '../containers/App'

export default (
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
    </Router>
)
