import React, {useEffect, useState} from "react";
import './styles.css';


export default function ProgressBar(props) {
    const [width, setwidth] = useState(100);
    const [backgroundColor,setBackgroundColor] = useState("green");
    const startProgressBar = () => {
        let deadline = new Date().getTime() + 10000;

        let x = setInterval(() => {
            let now = new Date().getTime();
            let t = deadline - now;
            let days = Math.floor(t / (1000 * 60 * 60 * 24));
            let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((t % (1000 * 60)) / 1000);
            if (seconds <= 0) {
                // alert('Timer Completed, Its '+new Date(stringTime).toLocaleTimeString()+" now");
                clearInterval(x);
                setwidth(0);
            }
            if(seconds<6){
                setBackgroundColor("red")
            }
            console.log(seconds);
            setwidth(10*seconds)
        }, 1000);
    }
    useEffect(startProgressBar, [])
    return (
        <div className={"progressBar"}>
            <div className="progress" style={{width: width + "%",background: backgroundColor}}>

                {width}
            </div>
        </div>
    )
}