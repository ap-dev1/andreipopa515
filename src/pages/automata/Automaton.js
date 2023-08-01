import "./automata.css";
import React, { useState, useEffect } from "react";
import { rule110, randomState } from "./rule110";
import Cell from "./Cell";


function createRandom() {
    let gen0 = []
    for (let i = 0; i < 30; i++) {
        let newCell = randomState([0, 1])
        gen0.push(newCell)
    }
    return gen0
}

let gen0 = createRandom()


function padOld(unpadded) {
    let last = unpadded[unpadded.length - 1]
    let first = unpadded[0]
    let padded = [last, ...unpadded, first]
    return padded
}


function Automaton() {
    const [cells, setCells] = useState(30)
    const [iterations, setIterations] = useState(20)
    const [automaton, setAutomaton] = useState([gen0])


    function createNew(unpadded) {
        let padded = padOld(unpadded)
        let newGeneration = []

        for (let i = 1; i < 31; i++) {
            let a = padded[i - 1]
            let b = padded[i]
            let c = padded[i + 1]
            let newCell = rule110([a, b, c])
            newGeneration.push(newCell)
        }
        setAutomaton(() => [...automaton, newGeneration])
    }

    return (
        <div className="automaton-wrapper">

            <h1>Perfect Automata</h1>

            <div className="automaton">
                {automaton.map((generation) => {
                    return (
                        <div className="generation">
                            {generation.map((cell) => {
                                return (
                                    // <div className="cell">{cell}</div>
                                    <Cell checked={cell} />
                                )
                            })}
                        </div>
                    )
                })}
            </div>

            <button
                onClick={() => createNew(automaton[automaton.length - 1])}
            >add one</button>



        </div>
    )
}

export default Automaton;