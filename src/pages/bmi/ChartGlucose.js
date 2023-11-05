import React from 'react';

// import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

import { getLabels, getValues, getDates, getStamps, getPounds, getGlucose, getNotes, getCustomLabels } from './utils';
import { myData } from './myData';

const dates = getDates(myData)
const customLabels = getCustomLabels(myData)
const stamps = getStamps(myData)
const pounds = getPounds(myData)
const glucose = getGlucose(myData)
const labels = getLabels(myData)


const dataGlucose = {
    labels: customLabels,
    datasets: [
        {
            label: "Blood glucose (mg/dL)",
            yAxisID: 'Blood glucose (mg/dL)',
            data: glucose,
            // backgroundColor: "rgb(255, 99, 132)",
            // borderColor: "rgb(111, 99, 132)",
        },
    ],
};

const optionsGlucose = {
    scales: {
        yAxes: [{
            id: 'Blood glucose (mg/dL)',
            type: 'linear',
            position: 'right',
            ticks: {
                max: 150,
                min: 50
            }
        }]
    }
}


const LineChartGlucose = () => {
    return (
        <div
            style={{
                // height: "400px",
                //minHeight: "600px",
                border: "1px solid grey",
            }}
        >
            <Line data={dataGlucose} options={optionsGlucose} />

        </div>
    );
};

export default LineChartGlucose;
