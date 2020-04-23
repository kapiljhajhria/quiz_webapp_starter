import React from "react";
import './styles.css';


export default function Result(props) {
    console.log("result page");
    console.log(props.location.state.score);
    console.log(props.location.state.resultMapList);
    return (
        <div className="resPage">
            <div>
                Total Score : {props.location.state.score}
            </div>
            {console.log(`score is ${props}`)}
            <table>
                <thead>
                <tr>
                    <th>Question</th>
                    <th>User Answers</th>
                    <th>Correct Answer</th>
                </tr>
                </thead>
                <tbody>
                {props.location.state.resultMapList.map((el) =>

                    (<tr>
                        <td>{el.que}</td>
                        <td>{el.userAnswer}</td>
                        <td>{el.correctAnswer}</td>
                    </tr>)
                )}
                </tbody>
            </table>
        </div>
    )
}