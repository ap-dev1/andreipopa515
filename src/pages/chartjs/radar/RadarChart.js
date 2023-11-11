import React from 'react';
// import { Line } from "react-chartjs-2";
import { Radar } from 'react-chartjs-2';
import { myData } from './myData';
import { radarOptions } from './radarOptions';

// const opt = 


const RadarChart = () => {
    return (
        // <Line data={dataWeight} options={optionsWeight} />
        <Radar
            data={myData}
            // options={optionsWeight}
            options={radarOptions}
        />
    );
};

export default RadarChart;
