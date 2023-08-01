import "./automata.css";
import React, { useState, useEffect } from "react";
import { rule110, randomState } from "./rule110";


function Cell(props) {
    const [checked, setChecked] = useState(true)
    const [mutant, setMutant] = useState(false)



    useEffect(() => {

        // Here I recalculate the value of the cell
        // based on its neighbours. If no neighbours,
        // use random states.

        // if (props.neighbours) {
        //     let x = rule110(props.neighbours)
        //     setChecked(x)
        // } else {
        //     let x = randomState()
        //     setChecked(x)
        // }

        // console.log(props.originalState)
        setChecked(props.checked)
    },
        [props.checked]
    )

    return (

        <>
            <div className="cell" >
                <input
                    type='checkbox'
                    id="cell1"
                    checked={checked}
                    data-mutant={mutant}
                    onChange={() => {
                        setMutant(!mutant)
                        setChecked(!checked)
                    }}
                >
                </input>


                <label for="cell1" >
                    {/* {checked ? 1 : 0} */}
                </label>
            </div>
            {/* <span>{mutant ? "mutant" : "original"}</span> */}
        </>
    )
}

export default Cell;