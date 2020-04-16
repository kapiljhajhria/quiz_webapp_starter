import React from "react";
import './styles.css';

export default function Option(props) {

    function printOption(){
        console.log(`tapped on ${props.text}`);
    }
    return (
        <div onClick={printOption}
            className={'option'}>
            {props.text}
        </div>
    )
}