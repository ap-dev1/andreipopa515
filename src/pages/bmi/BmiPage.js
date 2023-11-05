import "./bmi-page.css";
import React from "react";
import BmiCalculator from "./BmiCalculator";
import DateConverter from "./DateConverter";
import LineChartWeight from "./ChartWeight";
import LineChartGlucose from './ChartGlucose';


import Avocado from "./Avocado"; // category is not a .. ?

export default function BmiPage() {
    return (
        <div className="bmi-page">

            {/* <DateConverter /> */}

            {/* <h1>Weight and glucose log</h1>
            <h2>October-November 2023</h2> */}
            <div
                className="main-container"

            >



                <div className="story">
                    <LineChartWeight />
                    <p>
                        During the quarantine I had a workout streak of 450 days. without missing a single one, no matter what. I picked up running and I was preparing for my first race.
                        {/* In November 2022 I was 190 pounds of fitness and resolve.  */}
                        That was before the hunger strike (see Emory).
                    </p>

                    {/* <BmiCalculator /> */}
                    {/* <Avocado /> */}


                    {/* <p>
                        Soon after I began the hunger strike protest against Emory and my former advisors - they trafficked me, robbed me blind of my intellectual property, and left me for dead, essentially. Since then I lost 74 pounds, almost 40% of my body weight. Today I'm 116 pounds of indignation and resolve.
                    </p> */}

                    <LineChartGlucose />
                    <p>
                        {/* Note my glucose measurements.  */}
                        Ideal levels hover around 100. Mine vary between 70 and 80, which tells me that my body has no more fat to turn into glucose. <i> Device</i>:  <a href="https://www.amazon.com/Glucose-Monitor-Glucometer-Lancets-Solution/dp/B08LYC288R/ref=sr_1_1_sspa?crid=2ZXT01O6L5YPF&keywords=blood+glucose+monitor&qid=1698795727&sprefix=bloodglu%2Caps%2C228&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1">Metene TD-4116 Blood Glucose Monitor Kit</a>
                        {/* Although physically I'm comically weak, mentally I'm okay, which makes me wonder if it has something to do with ketones. I'll let you know. */}


                    </p>



                </div>


            </div>

        </div>
    )
}