import React from "react";
import Question from "../Question";
import Option from "../Option";
import './styles.css';


class Quiz extends React.Component {
    state = {
        score: 0,
        selectedOption:null,
    };
    question = {
        'text': "Who is current PM of India?",
        'options': ['Narendra Modi', 'Rahul Gandhi', 'Manmohan Singh', 'Sonia Gandhi'],
        'correct_choice': 0
    };
    selectThis=(id)=>{
        console.log(`updating selectedOption to ${id}`);
        this.setState({
            selectedOption:id,
        });
    }

    render() {
        return (
            <div className="header">
                <div className="score">Score: {this.state.score}</div>
                <Question questionText={this.question.text}/>
                <div className="options-container">
                    <Option text={this.question.options[0]} id={0} isCorrect={this.question.isCorrect===0} clicked={this.selectThis} selected={this.state.selectedOption===0}/>
                    <Option text={this.question.options[1]} id={1} isCorrect={this.question.isCorrect===1} clicked={this.selectThis} selected={this.state.selectedOption===1} />
                    <Option text={this.question.options[2]} id={2} isCorrect={this.question.isCorrect===2} clicked={this.selectThis} selected={this.state.selectedOption===2} />
                    <Option text={this.question.options[3]} id={3} isCorrect={this.question.isCorrect===3} clicked={this.selectThis} selected={this.state.selectedOption===3} />
                </div>
            </div>
        );
    }
}


export default Quiz;

