import "./automata.css";
import React, { useState } from "react";
import Cell from "./Cell";


function ImperfectAutomata() {

    const [generations, setGenerations] = useState(1)
    const [automaton, setAutomaton] = useState([
        [1, 0, 1, 0, 1],
        [0, 1, 0, 1, 0],
        [1, 0, 1, 0, 1],
    ])



    return (
        <div className="demo-container">

            <label>{generations}</label>

            <div className="automaton">

                {automaton.map((generation, index) => {

                    return (
                        <div className="generation">

                            <span>{`g${index}`}</span>
                            {
                                generation.map((cell, j) => {
                                    let neighbours = []
                                    if (j === 0) {
                                        neighbours = [
                                            generation[generation.length - 1].toString(),
                                            generation[0].toString(),
                                            generation[1].toString()
                                        ]
                                    }
                                    if (j === generation.length - 1) {
                                        neighbours = [
                                            generation[generation.length - 2].toString(),
                                            generation[generation.length - 1].toString(),
                                            generation[0].toString()
                                        ]
                                    } else {
                                        neighbours = [
                                            generation[j - 1].toString(),
                                            generation[j].toString(),
                                            generation[j + 1].toString()
                                        ]
                                    }
                                    console.log(neighbours)
                                    return (
                                        <Cell neighbours={neighbours} />
                                    )
                                })
                            }
                        </div>
                    )
                })}
            </div>
            <button
                onClick={() => setGenerations(generations + 1)}
            >
                Add generation
            </button>
        </div>
    )
}

export default ImperfectAutomata;