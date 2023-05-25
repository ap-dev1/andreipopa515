import "./imperfect-automata.css";
import React, { useState } from "react";
import { computeCellState } from "./rule110";
// import Cell from "./Cell";
// const useTheseStates = ["A", "B", "C"];
const useTheseStates = [0, 1];


function ImperfectAutomata() {

    const [cellState, setCellState] = useState(1)
    const [parents, setparents] = useState([1, 0, 0])



    function randomChoice(arr) {
        let xx = []
        while (xx.length === 0) {
            let a = arr[Math.floor(Math.random() * arr.length)]
            if (a !== cellState) {
                xx.push(a)
            }
        }

        return xx[0]
    }


    return (
        <div className="demo-container">
            demo-container

            <div className="automaton">

                <div className="row">


                </div>

                <div className="cell"
                    onClick={() => setCellState(randomChoice(useTheseStates))}
                >
                    {cellState}
                </div>



            </div>


        </div>
    )
}

export default ImperfectAutomata;