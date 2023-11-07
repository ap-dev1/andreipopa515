import "./bmi-page.css";
import React from "react";
import BmiCalculator from "./BmiCalculator";
import DateConverter from "./DateConverter";
import LineChartWeight from "./chartWeight/ChartWeight";
import LineChartGlucose from './ChartGlucose';


import Avocado from "./Avocado"; // category is not a .. ?

export default function BmiPage() {
    return (
        <div className="bmi-page">

            {/* <DateConverter /> */}

            {/* <h1>Weight and glucose log</h1>
            <h2>October-November 2023</h2> */}

            <table
                style={{
                    // width: "400px", 
                    // textAlign: "left", 
                    margin: "auto",
                    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
                    fontSize: ".9rem",
                }}
            >
                <tr>
                    <td
                        colSpan={2}
                    >
                        <p style={{ width: "400px", textAlign: "left", margin: "auto" }}>
                            During the quarantine I had a workout streak of 450 days. without missing a single one, no matter what. I picked up running and I was preparing for my first race.
                            {/* In November 2022 I was 190 pounds of fitness and resolve.  */}
                            &nbsp;That was before the hunger strike (see <a href="#/my-emory-experience" >Emory</a> ).
                            The silverlining is that if I live through this I get to rebuild myself from ground up, on my own terms.
                            <br /><br />
                            Meanwhile, I'm fiddling with &nbsp;
                            <a href="https://www.chartjs.org" target="blank">Chart.js</a>

                            &nbsp;, maybe I’ll build a course around it someday. I’ll share my progress as I go. If you find this useful please consider a modest contribution at <a href="https://ko-fi.com/fixmachina" target="blank">ko-fi.com/fixmachina</a>.&nbsp;More examples and code coming soon.
                        </p>
                    </td>

                    <td
                        style={{ height: "300px" }}
                    >
                        <LineChartWeight />
                    </td>
                </tr>




            </table>


            <div className="main-container" >



                <div className="story">

                    {/* <BmiCalculator /> */}
                    {/* <Avocado /> */}


                    {/* <p>
                        Soon after I began the hunger strike protest against Emory and my former advisors - they trafficked me, robbed me blind of my intellectual property, and left me for dead, essentially. Since then I lost 74 pounds, almost 40% of my body weight. Today I'm 116 pounds of indignation and resolve.
                    </p> */}


                    {/* <p>
                        Note my glucose measurements. 
                        Ideal levels hover around 100. Mine vary between 70 and 80, which tells me that my body has no more fat to turn into glucose. <i> Device</i>:  <a href="https://www.amazon.com/Glucose-Monitor-Glucometer-Lancets-Solution/dp/B08LYC288R/ref=sr_1_1_sspa?crid=2ZXT01O6L5YPF&keywords=blood+glucose+monitor&qid=1698795727&sprefix=bloodglu%2Caps%2C228&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1">Metene TD-4116 Blood Glucose Monitor Kit</a>
                        Although physically I'm comically weak, mentally I'm okay, which makes me wonder if it has something to do with ketones. I'll let you know.
                    </p> */}



                </div>


            </div>

        </div >
    )
}