import React from 'react';

import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

import { getLabels, getValues, getDates, getStamps, getPounds, getGlucose, getNotes, getCustomLabels } from './utils';
// import { dummy1 } from './dummyData';
// import { dummy22 } from './tutorialData';
import { myData } from './myData';

const dates = getDates(myData)
const customLabels = getCustomLabels(myData)
const stamps = getStamps(myData)
const pounds = getPounds(myData)
const glucose = getGlucose(myData)


const dataWeight = {
    labels: customLabels,
    datasets: [
        {
            label: "Weight (lbs)",
            yAxisID: 'Weight (lbs)',
            data: pounds,
            // backgroundColor: "rgb(255, 99, 132)",
            // borderColor: "rgb(255, 99, 132)",

        },
    ],
};

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

const optionsWeight = {
    scales: {
        yAxes: [{
            id: 'Weight (lbs)',
            type: 'linear',
            //position: 'left',
            ticks: {
                max: 200,
                min: 0
            }
        },]
    }
}



const optionsGlucose = {
    scales: {
        yAxes: [{
            id: 'Blood glucose (mg/dL)',
            type: 'linear',
            position: 'right',
            ticks: {
                max: 200,
                min: 0
            }
        }]
    }
}


const LineChart = () => {
    return (
        <div
            style={{
                // height: "400px",
                //minHeight: "600px",
                border: "1px solid grey",
            }}
        >
            <Line data={dataWeight} options={optionsWeight} />
            <Line data={dataGlucose} options={optionsGlucose} />

        </div>
    );
};

export default LineChart;
