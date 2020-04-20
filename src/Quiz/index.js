import React from "react";
import Question from "../Question";
import Option from "../Option";
import './styles.css';
import ProgressBar from "../ProgressBar";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            selectedOption: null,
            questionAnswered: false,
            currentQuestionIndex: 0,

        }
    }
    userAnswer=[];
    questions = [
        {
            'text': "Who is current PM of India?",
            'options': ['Narendra Modi', 'Rahul Gandhi', 'Manmohan Singh', 'Sonia Gandhi'],
            'correct_choice': 0
        },
        {
            'text': "What is capital of Orissa?",
            'options': ['Chandigarh', 'Bhubaneshwar', 'Tripura', 'Nagaland'],
            'correct_choice': 1
        },
        // {
        //     'text': "In the context to India's wild life, the flying fox is a __?",
        //     'options': ['Bat', 'Vulture', 'Stok', 'Kite'],
        //     'correct_choice': 0
        // },
        // {
        //     'text': 'What percentage of land area should remain covered by forest to maintain Ecological balance?',
        //     'options': ['10%', '33%', '5%', 'None of these'],
        //     'correct_choice': 1
        // },
        // {
        //     'text': ' The purest form of iron is',
        //     'options': ['Wrought iron', 'Steel', 'Pig iron', 'Nickel steel'],
        //     'correct_choice': 0
        // },
        // {
        //     'text': 'Layer of atmosphere in which Ozone layer lies is',
        //     'options': ['Exosphere', 'Mesosphere', 'Troposphere', 'Stratosphere'],
        //     'correct_choice': 3
        // },
    ];


    selectThis = (id) => {
        this.userAnswer.push(id);

        console.log("clicked some option");
        if (!this.state.questionAnswered) {

            let copyCurrentQuestionIndex = this.state.currentQuestionIndex;
            copyCurrentQuestionIndex = copyCurrentQuestionIndex + 1;
            console.log(`updating selectedOption to ${id}`);
            let newScore = this.state.score;

            if (id === this.question.correct_choice) {
                newScore = newScore + 10;
            }
            this.setState({
                selectedOption: id,
                score: newScore,
                questionAnswered: true,
            });

            setTimeout(() => {
                if (copyCurrentQuestionIndex === this.questions.length) {
                    this.props.history.push({
                            pathname: "/quiz_webapp_starter/result",
                            state: {
                                score: newScore,
                                questionsList:this.questions,
                                userAnswers:this.userAnswer,
                            }
                        }
                    )
                } else {
                    this.setState({
                        selectedOption: null,
                        questionAnswered: false,
                        currentQuestionIndex: copyCurrentQuestionIndex,
                    });
                }

            }, 2000);
        }
    }
    question;

    moveToNextQuestion() {
        this.userAnswer.push(-1);
        let copyCurrentQuestionIndex = this.state.currentQuestionIndex;
        if (copyCurrentQuestionIndex < this.questions.length - 1)
            copyCurrentQuestionIndex = copyCurrentQuestionIndex + 1;
        else if (copyCurrentQuestionIndex === this.questions.length - 1) {
            this.props.history.push({
                pathname: "/quiz_webapp_starter/result",
                state:{
                    score:this.state.score,
                    questionsList:this.questions,
                    userAnswers:this.userAnswer,
                }
            })
        }
        this.setState({
            currentQuestionIndex: copyCurrentQuestionIndex,
        });
    }

    render() {
        this.question = this.questions[this.state.currentQuestionIndex];
        return (
            <div className="header">
                <div className="score">Score: {this.state.score}</div>
                <Question questionText={this.question.text}/>
                <div className="options-container">
                    <Option queIndex={this.state.currentQuestionIndex} text={this.question.options[0]} id={0}
                            isCorrect={this.question.correct_choice === 0}
                            clicked={this.selectThis} selected={this.state.selectedOption === 0}/>
                    <Option queIndex={this.state.currentQuestionIndex} text={this.question.options[1]} id={1}
                            isCorrect={this.question.correct_choice === 1}
                            clicked={this.selectThis} selected={this.state.selectedOption === 1}/>
                    <Option queIndex={this.state.currentQuestionIndex} text={this.question.options[2]} id={2}
                            isCorrect={this.question.correct_choice === 2}
                            clicked={this.selectThis} selected={this.state.selectedOption === 2}/>
                    <Option queIndex={this.state.currentQuestionIndex} text={this.question.options[3]} id={3}
                            isCorrect={this.question.correct_choice === 3}
                            clicked={this.selectThis} selected={this.state.selectedOption === 3}/>
                </div>
                <ProgressBar key={this.state.currentQuestionIndex} questionAnswered={this.state.questionAnswered}
                             moveToNextQuestion={() => this.moveToNextQuestion()}
                             queIndex={this.state.currentQuestionIndex}/>
            </div>
        );
    }
}


export default Quiz;

