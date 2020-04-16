import React, {useState} from "react";
import './styles.css';

export default function Option(props) {
    return (
        <div onClick={() => props.clicked(props.id)}
             className={props.isCorrect ? props.selected ? "correct-option option" : 'option' : props.selected ? "wrong-option option" : 'option'}>
            {props.text}
        </div>
    )
}