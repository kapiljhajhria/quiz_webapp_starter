import React from "react";
import Question from "../Question";
import Option from "../Option";
import './styles.css';


class Quiz extends React.Component {
    state = {
        score: 0,
        selectedOption:null,
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
                <Question/>
                <div className="options-container">
                    <Option text={'Narendra Modi'} id={0} isCorrect={true} clicked={this.selectThis} selected={this.state.selectedOption===0}/>
                    <Option text={'Rahul Gandhi'} id={1} isCorrect={false} clicked={this.selectThis} selected={this.state.selectedOption===1} />
                    <Option text={'Manmohan Singh'} id={2} isCorrect={false} clicked={this.selectThis} selected={this.state.selectedOption===2} />
                    <Option text={'Sonia Gandhi'} id={3} isCorrect={false} clicked={this.selectThis} selected={this.state.selectedOption===3} />
                </div>
            </div>
        );
    }
}


export default Quiz;

