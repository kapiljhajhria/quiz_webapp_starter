import React, {useState} from "react";
import './styles.css';
import Confetti from 'react-dom-confetti';


export default function Option(props) {
    return (

        <div onClick={() => {
            clearInterval(1+props.queIndex);
            props.clicked(props.id);
        }}

             className={props.isCorrect ? (props.selected ? "correct-option option" : 'option') : (props.selected ? "wrong-option option" : 'option')}>
            <Confetti active={props.isCorrect && props.selected}/>
            {props.text}

        </div>
    )
}