import React from 'react';
import {connect} from "react-redux";
import * as counterActions from "../../actions/counterActions.js";
import {bindActionCreators} from "redux";


class Counter extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>{this.props.a}</h1>
                <button onClick={()=>{this.props.counterActions.add(1)}}>+1</button>
                <button onClick={()=>{this.props.counterActions.addServer()}}>+?</button>
            </div>
        );
    }
}
export default connect(
    ({counterReducer})=>({
        a : counterReducer.a
    }),
    (dispatch)=>({
        counterActions : bindActionCreators(counterActions,dispatch)
    })
)(Counter);