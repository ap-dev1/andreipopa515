import React from 'react';
import { Line } from "react-chartjs-2";
import { getLabels, getValues, getDates, getStamps, getPounds, getGlucose, getNotes, getCustomLabels } from './utils';
import { myData } from './myData';


const dates = getDates(myData)
const customLabels = getCustomLabels(myData)
const stamps = getStamps(myData)
const pounds = getPounds(myData)
const glucose = getGlucose(myData)
const labels = getLabels(myData)


const dataWeight = {
    labels: customLabels,
    datasets: [
        {
            label: "Weight (lbs)",
            yAxisID: 'Weight (lbs)',
            data: pounds,
            // backgroundColor: "rgb(255, 99, 132)",
            // borderColor: "rgb(255, 99, 132)",
            //backgroundColor: "rgb(255, 99, 132)",
            //borderColor: "rgb(255, 99, 132)",


        },
    ],
};

const optionsWeight = {
    elements: {
        point: {
            radius: 4,
            pointStyle: 'circle', // cross, crossRot, dash, line, rect, starr, triangle, false;
            backgroundColor: 'rgb(100,100,100)', // 'rgba(50,50,50,.6)'
        },
        line: {
            borderWidth: 3,
            borderColor: 'rgb(75,75,75)',
        },
    },
    scales: {
        yAxes: [
            {
                id: 'Weight (lbs)',
                type: 'linear',
                //position: 'left',
                suggestedMin: 100,
                suggestedMax: 200,

            },

        ],
        x: {
            grid: {
                color: 'grey',
                borderColor: 'red',
                tickColor: 'grey',
            },
        },
    },

}


const LineChartWeight = () => {
    return (
        <div
            style={{
                // height: "400px",
                //minHeight: "600px",
                border: "1px solid grey",
            }}
        >
            <Line data={dataWeight} options={optionsWeight} />

        </div>
    );
};

export default LineChartWeight;
