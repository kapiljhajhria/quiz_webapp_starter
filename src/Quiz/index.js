import React from "react";
import Question from "../Question";
import Option from "../Option";
import './styles.css';

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

    userAnswer = [];
    questions = [
        {
            'text': "Did you exercise today?",
            'options': ["Yes", "No"],
            'correct_choice': 0
        },
        {
            'text': "Did you sleep well last night?",
            'options': ["Yes", "No"],
            'correct_choice': 0
        },
        {
            'text': "Did you drink alcohol?",
            'options': ["Yes", "No"],
            'correct_choice': 1
        },
        {
            'text': 'Did you eat well?',
            'options': ["Yes", "No"],
            'correct_choice': 0
        },
        {
            'text': 'Were you productive?',
            'options': ["Yes", "No"],
            'correct_choice': 0
        },
        {
            'text': 'Did you spend time with friends?',
            'options': ["Yes", "No"],
            'correct_choice': 0
        },
    ];


    selectThis = (id) => {
        this.userAnswer.push(id);

        console.debug("clicked some option");
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
                    let resultMapList = [];
                    this.userAnswer.map((value, index) => {
                        let correctAnswer = this.questions[index].options[this.questions[index].correct_choice];
                        let userAnswer = value !== -1 ? this.questions[index].options[value] : "time out";
                        resultMapList.push({
                            que: this.questions[index]["text"],
                            userAnswer: userAnswer,
                            correctAnswer: correctAnswer,
                        });
                    });
                    this.props.history.push({
                            pathname: "/quiz_webapp_starter/result",
                            state: {
                                score: newScore,
                                resultMapList: resultMapList
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
            let resultMapList = [];
            this.userAnswer.map((value, index) => {
                let correctAnswer = this.questions[index].options[this.questions[index].correct_choice];
                let userAnswer = value !== -1 ? this.questions[index].options[value] : "time out";
                resultMapList.push({
                    que: this.questions[index]["text"],
                    userAnswer: userAnswer,
                    correctAnswer: correctAnswer,
                });
            });
            this.props.history.push({
                pathname: "/quiz_webapp_starter/result",
                state: {
                    score: this.state.score,
                    resultMapList: resultMapList
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
                    {this.question.options.map((option, idx) => (
                        <Option queIndex={this.state.currentQuestionIndex} text={option} id={idx}
                                isCorrect={this.question.correct_choice === idx}
                                clicked={this.selectThis} selected={this.state.selectedOption === idx}/>
                    ))}
                </div>
            </div>
        );
    }
}


export default Quiz;

