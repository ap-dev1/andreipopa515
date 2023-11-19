import React from 'react';
import { parse } from "html-react-parser";

import { Line } from "react-chartjs-2";
import { getLabels, getValues, getDates, getStamps, getPounds, getGlucose, getNotes, getCustomLabels, getLatinNotes, getLatinTranslation } from './utils';
import { myData } from './myData';

import { chartElements } from './elements';
import { chartTitle, chartSubtitle } from "./titles";
import { chartLegend } from "./legend";
import { chartScales } from './scales';
import { chartTooltipsCustom } from './tooltipsCustom';


const dates = getDates(myData)
const customLabels = getCustomLabels(myData)
const stamps = getStamps(myData)
const pounds = getPounds(myData)
const glucose = getGlucose(myData)
const labels = getLabels(myData)
const notes = getNotes(myData)
const latinNotes = getLatinNotes(myData)
const latinTranslation = getLatinTranslation(myData)

const height = "6'3"
const cm = "191cm" // 1cm = 0.3937008 in

const bmi = []
const kg = [] // 1kg = 2.204623 lbs



pounds.forEach(element => {
    // let height = parseFloat(feet) * 12 + parseFloat(inches)
    // let result = 703 * parseFloat(lbs) / parseFloat(height) ** 2
    // setBmi(result.toFixed(1))
    let height = parseFloat(75)
    let result = 703 * parseFloat(element) / parseFloat(height) ** 2
    // return result.toFixed(1)
    bmi.push(result.toFixed(1))

    let metric = parseFloat(element) / 2.204623
    kg.push(metric.toFixed(1))
});


// const dataBmi = {
//     labels: customLabels,
//     datasets: [
//         {
//             data: bmi,
//         },
//     ],
// };


// //====================================
// const dataWeight = {
//     labels: customLabels,
//     datasets: [
//         {
//             data: pounds,
//             notes: notes,
//             // label: "Left dataset",
//             label: "left-y-axis",
//             yAxisId: "left-y-axis"
//         },
//         // {
//         //     data: bmi,
//         //     notes: notes,
//         //     // label: "Right dataset",
//         //     label: "right-y-axis",
//         //     yAxisId: "right-y-axis"
//         // },
//     ],
// };




// const optionsWeight = {
//     maintainAspectRatio: false,
//     elements: chartElements,
//     scales: chartScales,

//     scales: {
//         yAxes: [
//             {
//                 id: "left-y-axis",
//                 type: "linear",
//                 position: "left",
//                 min: 100,
//                 max: 200
//             },
//             {
//                 id: "right-y-axis",
//                 type: "linear",
//                 position: "right",
//                 ticks: {
//                     max: 1,
//                     min: 0
//                 }
//             }
//         ]
//     },


//     plugins: {
//         title: chartTitle,
//         subtitle: chartSubtitle,
//         legend: chartLegend,
//         tooltip: chartTooltipsCustom
//     }
// }


// //====================================
const dataWeight = {
    labels: customLabels,
    datasets: [
        {
            data: pounds,
            notes: notes,
            latinNotes: latinNotes,
            latinTranslation: latinTranslation,
            kg: kg,
            bmi: bmi
        },
    ],
};

const optionsWeight = {
    maintainAspectRatio: false,
    elements: chartElements,
    scales: chartScales,
    plugins: {
        title: chartTitle,
        subtitle: chartSubtitle,
        legend: chartLegend,
        tooltip: chartTooltipsCustom
    }
}


const LineBmi = () => {
    return (
        <Line data={dataWeight} options={optionsWeight} />
    );
};

export default LineBmi;
