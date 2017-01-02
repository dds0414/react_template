/**
 * Created by yangbo on 17/1/2.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'


class App extends Component{
    render(){
        const {text} = this.props;
        return (
            <div>
                hello world!{text}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProp) =>({
    text: state.reducers
});


export default connect(mapStateToProps)(App)
