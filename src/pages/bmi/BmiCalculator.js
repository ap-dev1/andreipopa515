import "./bmi-calculator.css";
import { useState, useEffect } from "react";



export default function BmiCalculator() {
    const [inches, setInches] = useState(75)
    const [lbs, setLbs] = useState(119)
    // const [cm, setCm] = useState(191)
    // const [kg, setKg] = useState(0)
    const [bmi, setBmi] = useState(() => {
        // let result = 703 ** { lbs } / { inches }
        let nominator = 703 * lbs
        let denominator = inches ** 2

        let result = nominator / denominator

        console.log("nominator: ", nominator)
        console.log("denominator: ", denominator)
        console.log("result: ", result.toFixed(1))

        return result.toFixed(1)
    })


    // useEffect(() => {
    //     let result = 703 ** lbs / inches
    //     console.log("result: ", result)
    //     setBmi(result)
    // }, [lbs, inches])



    return (
        <div id="bmi-page">



            {/* <div id="bmi-calculator">
                <div id="div-values">
                    <label>Height and Weight </label>
                    <label>inches:</label>
                    <input
                        defaultValue={inches}
                        value="75"
                        onChange={(value) => { setInches(value) }}
                    ></input>

                    <label>pounds:</label>

                    <input
                        defaultValue={lbs}
                        onChange={(value) => { setLbs(value) }}
                    ></input>
                    METRIC:
                    1kg = 2.204623 pounds
                    1cm = 0.3937008 cm

                </div>


                <div id="bmi-result">
                    <label>Your BMI is: </label>
                    <label>BMI: {((703 * lbs) / (inches ** 2)).toFixed(1)}</label>
                </div>

            </div> */}



        </div>
    )
}