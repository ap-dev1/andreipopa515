import React from 'react';
import { Line } from "react-chartjs-2";
import { getLabels, getValues, getDates, getStamps, getPounds, getGlucose, getNotes, getCustomLabels } from '../utils';
import { myData } from '../myData';


import { chartElements } from './elements';
import { chartTitle, chartSubtitle } from "./titles";
import { chartLegend } from "./legend";
import { chartScales } from './scales';


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
            data: pounds,
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
    }
}


const LineChartWeight = () => {
    return (
        <Line data={dataWeight} options={optionsWeight} />
    );
};

export default LineChartWeight;
