import React from "react";
import './styles.css';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";


export default function Result(props) {
    console.log("result page");
    console.log(props.location.state.score);
    console.log(props);
    return (
        <div className="resPage">
            {console.log(`score is ${props}`)}
            This is a result page
        </div>
    )
}