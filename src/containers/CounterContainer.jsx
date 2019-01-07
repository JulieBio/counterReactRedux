import React from "react";
import { connect } from "react-redux";
import state from '../state';

const CounterComponent = ({ count, dispatch }) => {
    return (<div>
        <h1>{count}</h1>
        <button onClick={() => dispatch(state.addAction)}> (+ 1) </button>
        <button onClick={() => dispatch(state.removeAction)}> (- 1) </button>
        <button onClick={() => dispatch(state.addActionTen)}> (+ 10) </button>
        <button onClick={() => dispatch(state.removeActionTen)}> (- 10) </button>
        <button onClick={() => dispatch(state.resetAction)}> ( 0 ) </button>
    </div>)
};

const mapStateToProps = state => ({
    count: state
});

export default connect(mapStateToProps)(CounterComponent);