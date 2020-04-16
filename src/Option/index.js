import React from "react";
import './styles.css';

export default function Option(props) {


    return (
        <div
            className={'option'}>
            {props.text}
        </div>
    )
}