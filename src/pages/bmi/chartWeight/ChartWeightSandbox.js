import React from 'react';
import { Line } from "react-chartjs-2";
import { Chart } from 'chart.js';
import { getLabels, getValues, getDates, getStamps, getPounds, getGlucose, getNotes, getCustomLabels } from '../utils';
import { myData } from '../myData';


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
const bmi = []

pounds.forEach(element => {
    // let height = parseFloat(feet) * 12 + parseFloat(inches)
    // let result = 703 * parseFloat(lbs) / parseFloat(height) ** 2
    // setBmi(result.toFixed(1))
    let height = parseFloat(75)
    let result = 703 * parseFloat(element) / parseFloat(height) ** 2
    // return result.toFixed(1)
    bmi.push(result.toFixed(1))
});


//============================================
// var canvas = document.getElementById('myChart').getContext('2d');
var canvas = document.getElementById('myChart');

console.log("canvas: ", canvas)

export default function LineChartWeightSandbox() {

    new Chart(canvas, {
        type: 'line',


        data: {
            labels: ['1', '2', '3', '4', '5'],
            datasets: [{
                label: 'A',
                yAxisID: 'A',
                data: [100, 96, 84, 76, 69]
            }, {
                label: 'B',
                yAxisID: 'B',
                data: [1, 1, 1, 1, 0]
            }]
        },


        options: {
            scales: {
                yAxes: [
                    {
                        id: 'A',
                        type: 'linear',
                        position: 'left',
                    }, {
                        id: 'B',
                        type: 'linear',
                        position: 'right',
                        ticks: {
                            max: 1,
                            min: 0
                        }
                    }
                ]
            }
        }
    });

}


