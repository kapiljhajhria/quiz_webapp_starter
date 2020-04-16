import React, {useState} from "react";
import './styles.css';

export default function Option(props) {
    const [selected, setSelected] = useState(false);
    function printOption(){
        setSelected(!selected);
        console.log(`tapped on ${props.text}`);
    }
    return (
        <div onClick={printOption}
            className={selected?"correct-option option":'option'}>
            {props.text}
        </div>
    )
}