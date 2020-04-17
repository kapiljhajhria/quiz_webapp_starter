import React, {useEffect, useState} from "react";
import './styles.css';
import props from "../Quiz";


export default class ProgressBar extends React.Component {
    constructor() {
        super(props);
        this.intervalId = null;
        this.state = {
            width: 100,
            color: "green"
        };
    }

    componentDidMount() {
        let countDown = 100;
        this.intervalId = setInterval(() => {
            if (this.props.questionAnswered) {
                clearInterval(this.intervalId)
            }
            if (countDown === 0) {
                clearInterval(this.intervalId)
                if (typeof this.props.moveToNextQuestion === 'function') {
                    this.props.moveToNextQuestion();
                }
            }
            if (countDown < 40) {
                this.setState({color: "red"})
            }
            countDown = countDown - 1;
            this.setState({width: countDown})

        }, 100)
    }

    componentWillUnmount() {
        //to be executed when component unmounts
        clearInterval(this.intervalId);
    }

    render() {
        return (
            <div className={"progressBar"}>
                <div className="progress" style={{width: this.state.width + "%", background: this.state.color}}>

                    {this.state.width}
                </div>
            </div>
        )
    }
}