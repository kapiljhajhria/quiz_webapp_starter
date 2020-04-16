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
                    <Option text={'Narendra Modi'} isCorrect={true}/>
                    <Option text={'Rahul Gandhi'} isCorrect={false}/>
                    <Option text={'Manmohan Singh'} isCorrect={false}/>
                    <Option text={'Sonia Gandhi'} isCorrect={false}/>
                </div>
            </div>
        );
    }
}


export default Quiz;

