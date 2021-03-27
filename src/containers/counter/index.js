import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Counter = ({newCount, increment, decrement}) => {
    return (
        <div>
            <h2>{newCount}</h2>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
        </div>
    )
}

const mapStateToProps = ({ count }) => ({
    newCount: count,
});

const mapDispatchToProps = dispatch => ({
    increment: () => dispatch({type : "UP"}),
    decrement: () => dispatch({type : "DOWN"})
});   

export const ConnectedCounterPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);
  