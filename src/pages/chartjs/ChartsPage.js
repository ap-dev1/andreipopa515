import "./charts-page.css";
import React from "react";
import LineBmi from "./linebmi/LineBmi";
import RadarChart from "./radar/RadarChart";


export default function ChartsPage() {
    return (
        <div className="charts-page">

            <table
                style={{
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

                    <td style={{ height: "300px" }}>
                        <LineBmi />
                    </td>
                </tr>



                <tr>
                    <td
                        colSpan={2}
                    >
                        <p style={{ width: "400px", textAlign: "left", margin: "auto" }}>
                            RADAR charts, or polar, or spider, can display multidimensional data with ease. I find them useful to show differences in experimental conditions on collections of dependent ....

                        </p>
                    </td>

                    <td style={{ height: "400px", width: "600px" }}>
                        <RadarChart />
                    </td>
                </tr>



                <tr>
                    <td style={{ height: "300px" }}>
                        <canvas id="myChart"></canvas>
                    </td>
                </tr>

            </table>


            <div className="main-container" >
                <div className="story"></div>
            </div>

        </div >
    )
}