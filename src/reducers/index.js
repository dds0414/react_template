/**
 * Created by yangbo on 17/1/2.
 */
import {routerStateReducer} from 'redux-router';
import {combineReducers} from 'redux';

const reducers = (state=0, action) => {
    switch (action.type){
        case "TEST":
            return state + action.number;
        default:
            return state
    }
};
const reducer = combineReducers({
    router: routerStateReducer,
    reducers
});

export default reducer