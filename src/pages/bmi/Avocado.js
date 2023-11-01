import React from 'react';

import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

import { getLabels, getValues, getDates, getStamps, getPounds, getGlucose, getNotes, getCustomLabels } from './utils';
import { dummy1 } from './dummyData';
import { dummy22 } from './tutorialData';
import { myData } from './myData';
//==========================================================
// const labels = ["January", "February", "March", "April", "May", "June"];

// const data = {
//     labels: labels,
//     datasets: [
//         {
//             label: "My First dataset",
//             backgroundColor: "rgb(255, 99, 132)",
//             borderColor: "rgb(255, 99, 132)",
//             data: [0, 10, 5, 2, 20, 30, 45],
//         },
//     ],
// };
//==========================================================

// const labels = getLabels(obj1);
// const values = getValues(obj1);
// console.log("labels: ", labels)
// console.log("values: ", values)


// const labels1 = getDates(dummy22)
// const values1 = getValues(dummy22)
// const stamps = getStamps(dummy22)
const dates = getDates(myData)
const customLabels = getCustomLabels(myData)
const stamps = getStamps(myData)
const pounds = getPounds(myData)
const glucose = getGlucose(myData)


// console.log("labels1: ", labels1)
// console.log("values1: ", values1)
// console.log("stamps: ", stamps)


// let toTimestamp = strDate => Date.parse(strDate)
// let strDate = "2023-10-31T10:00:00.000Z"
// let aa = Date.parse(strDate)
// console.log("timestamp: ", aa)





const data = {
    // labels: dates,
    labels: customLabels,
    datasets: [
        {
            label: "Weight (lbs)",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: pounds
        },
    ],
};


const data1 = {
    labels: customLabels,
    datasets: [
        {
            label: "Blood glucose (mg/dL)",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(111, 99, 132)",
            data: glucose
        },
    ],
};

const LineChart = () => {
    return (
        <>
            <div
                style={{
                    // width: "400px",
                    // height: "300px",
                    // margin: "1rem auto",
                }}
            >
                <Line data={data} />
            </div>

            <div
                style={{
                    // width: "400px",
                    // height: "300px",
                    // margin: "1rem auto",
                }}
            >
                <Line data={data1} />
            </div>
        </>
    );
};

export default LineChart;

// const data = {
//     labels: ['Red', 'Orange', 'Blue'],
//     // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
//     datasets: [
//         {
//             label: 'Popularity of colours',
//             data: [55, 23, 96],
//             // you can set indiviual colors for each bar
//             backgroundColor: [
//                 'rgba(255, 255, 255, 0.6)',
//                 'rgba(255, 255, 255, 0.6)',
//                 'rgba(255, 255, 255, 0.6)'
//             ],
//             borderWidth: 1,
//         }
//     ]
// }

// export default function Avocado() {
//     return <Line options={options} data={data} />;
// }








// //=============================================

// // import {
// //     Chart as ChartJS,
// //     CategoryScale,
// //     LinearScale,
// //     PointElement,
// //     LineElement,
// //     Title,
// //     Tooltip,
// //     Legend,
// // } from 'chart.js';
// // import { Line } from 'react-chartjs-2';

// // ChartJS.register(
// //     CategoryScale,
// //     LinearScale,
// //     PointElement,
// //     LineElement,
// //     Title,
// //     Tooltip,
// //     Legend
// // );

// // export const options = {
// //     responsive: true,
// //     plugins: {
// //         legend: {
// //             // position: 'top' as const,
// //             position: 'top',

// //         },
// //         title: {
// //             display: true,
// //             text: 'Chart.js Line Chart',
// //         },
// //     },
// // };

// // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// // export const data = {
// //     labels,
// //     datasets: [
// //         {
// //             label: 'Dataset 1',
// //             data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
// //             borderColor: 'rgb(255, 99, 132)',
// //             backgroundColor: 'rgba(255, 99, 132, 0.5)',
// //         },
// //         {
// //             label: 'Dataset 2',
// //             data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
// //             borderColor: 'rgb(53, 162, 235)',
// //             backgroundColor: 'rgba(53, 162, 235, 0.5)',
// //         },
// //     ],
// // };
