import React from "react";
import Question from "../Question";
import Option from "../Option";
import './styles.css';


class Quiz extends React.Component {
    state = {
        score: 0
    };

    render() {
        return (
            <div className="header">
                <div className="score">Score: {this.state.score}</div>
                <Question/>
                <div className="options-container">
                    <Option text={'Narendra Modi'}/>
                    <Option text={'Rahul Gandhi'}/>
                    <Option text={'Manmohan Singh'}/>
                    <Option text={'Sonia Gandhi'}/>
                </div>
            </div>
        );
    }
}


export default Quiz;

