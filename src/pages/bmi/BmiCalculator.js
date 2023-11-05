
// November 1 2023
// I will recreate the BMI calculator from this link using signals. I haven't put a single calorie in me in about two weeks. 116 pounds. I had some Diet Dr. Pepper today and some sea salt water flushes, un mug total.
//  https://www.nhlbi.nih.gov/health/educational/lose_wt/BMI/


// November 2, 2am, implemented classic hooks, works correctly, no metric system. After I rest a bit I'll do signal.



import "./bmi-calculator.css";
import { useState, useEffect } from "react";


export default function BmiCalculator() {
    const [feet, setFeet] = useState(null)
    const [inches, setInches] = useState(null) // 1cm = 0.3937008 in
    const [lbs, setLbs] = useState(null) // 1kg = 2.204623 lbs
    const [bmi, setBmi] = useState(null)


    useEffect(() => {
        let height = parseFloat(feet) * 12 + parseFloat(inches)
        let result = 703 * parseFloat(lbs) / parseFloat(height) ** 2
        setBmi(result.toFixed(1))
    }, [feet, inches, lbs])



    return (
        <div id="bmi-calculator">


            <table>

                <tr>
                    <th >
                        <label>feet</label>
                    </th>
                    <th >
                        <label>inches</label>
                    </th>
                    <th >
                        <label>lbs</label>
                    </th>
                    <th >
                        <label>BMI</label>
                    </th>
                </tr>




                <tr>
                    <td >
                        <input
                            className="variables"
                            placeholder="feet"
                            onChange={event => setFeet(event.target.value)}
                        ></input>
                    </td>
                    <td >
                        <input
                            className="variables"
                            placeholder="inches"
                            onChange={event => setInches(event.target.value)}
                        ></input>
                    </td>
                    <td>
                        <input
                            className="variables"
                            placeholder="lbs"
                            onChange={event => setLbs(event.target.value)}
                        ></input>
                    </td>
                    <td
                    // rowSpan={2}
                    >
                        <label className="result">{bmi ? bmi : "nan"}</label>
                    </td>
                </tr>

            </table>




        </div>
    )
}