import React from "react";
import './styles.css';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";



export default function Result(props){
    return (
        <Link exact to={"/quiz_webapp_starter/result"} >
            <div className="resPage">
                {/*/quiz_webapp_starter*/}
                This is a result page
            </div>
        </Link>

    )
}