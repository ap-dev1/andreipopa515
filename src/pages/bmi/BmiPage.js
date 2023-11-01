import "./bmi-page.css";
import React from "react";
import BmiCalculator from "./BmiCalculator";
import Avocado from "./Avocado";

export default function BmiPage() {
    return (
        <div className="bmi-page">
            <h1>Weight and glucose log</h1>
            <h2>October-November 2023</h2>
            <div
                className="main-container"

            >
                <div className="story">
                    <p>
                        During the quarantine I had a workout streak of 450 days. You heard that right: I worked out for 450 days straight, without missing a single one, no matter what. I picked up running and I was preparing for my first race. In November 2022 I was 190 pounds of fitness and resolve.
                    </p>

                    <p>
                        Soon after I began the hunger strike protest against Emory and my former advisors - they trafficked me, robbed me blind of my intellectual property, and left me for dead, essentially. Since then I lost 74 pounds, almost 40% of my body weight. Today I'm 116 pounds of indignation and resolve.
                    </p>

                    <p>
                        Note the glucose measurements. Ideal levels hover around 100. Mine vary between 70 and 80, which tells me that my body has no more fat to turn into glucose. Although physically I'm comically weak, mentally I'm okay, which makes me wonder if it has something to do with ketogenesis. I'll let you know what I found. But now I'll take a walk to see the Halloween decorations.
                    </p>



                </div>

                <div className='charts'>
                    <BmiCalculator />
                    <Avocado />
                    <a href="https://www.amazon.com/Glucose-Monitor-Glucometer-Lancets-Solution/dp/B08LYC288R/ref=sr_1_1_sspa?crid=2ZXT01O6L5YPF&keywords=blood+glucose+monitor&qid=1698795727&sprefix=bloodglu%2Caps%2C228&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1">Metene TD-4116 Blood Glucose Monitor Kit</a>
                </div>
            </div>
        </div>
    )
}