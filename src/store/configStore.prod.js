/**
 * Created by yangbo on 17/1/2.
 */
import { createStore, applyMiddleware, compose } from 'redux'
import { reduxReactRouter } from 'redux-router'
import createHistory from 'history/lib/createBrowserHistory'
import routes from '../routes'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const finalCreateStore = compose(
    applyMiddleware(thunk),
    reduxReactRouter({ routes, createHistory })
)(createStore);

export default function configStore(initialState) {
    return finalCreateStore(rootReducer, initialState)
}