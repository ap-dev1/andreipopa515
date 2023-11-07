// The following chart will have scales 'xAxis' and 'yAxis':
//
// let chart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//       datasets: [{
//         yAxisID: 'yAxis'
//       }]
//     },
//     options: {
//       scales: {
//         xAxis: {
//           // The axis for this scale is determined from the first letter of the id as `'x'`
//           // It is recommended to specify `position` and / or `axis` explicitly.
//           type: 'time',
//         }
//       }
//     }
//   });

//=========================================================
//The following chart will have 'x' and 'y' scales:
// let chart = new Chart(ctx, {
//     type: 'line'
//   });


// USED NOW
export const chartScales = {
    x: {
        // type: "string", //Custom scales can be created and registered with a string key. This allows changing the type of an axis for a chart.
        alignToPixels: false, //Align pixel values to device pixels.
        // backgroundColor: "??", //Background color of the scale area.
        border: {
            display: true, //If true, draw a border at the edge between the axis and the chart area.
            //color: 'chart default', //If true, draw a border at the edge between the axis and the chart area.
            width: 1, //
            dash: [

            ],
            dashOffset: 0.0, //Offset for line dashes. See MDN.
            z: 0, // z-index of the border layer. Values <= 0 are drawn under datasets, > 0 on top.
        },
        display: true, //Controls the axis global visibility (visible when true, hidden when false). When display: 'auto', the axis is visible only if at least one associated dataset is visible.
        grid: {
            circular: false, //

            color: 'lightgrey',
            display: true, //
            drawOnChartArea: true, //
            drawTicks: true, //
            lineWidth: 1, //
            offset: false, //
            tickBorderDash: [], //
            tickBorderDashOffset: 0, //Offset for the line dash of the tick mark. If unset, defaults to the grid line borderDashOffset value
            //tickColor: "color", //
            tickLength: 8,
            //tickWidth: number, //Width of the tick mark in pixels. If unset, defaults to the grid line width.

            borderColor: 'lightgrey',
            tickColor: 'lightgrey',

            z: -1, //z-index of the gridline layer. Values <= 0 are drawn under datasets, > 0 on top.

        },
        // min: 100, //User defined minimum number for the scale, overrides minimum value from data.
        // max: 200,
        reversed: false, //
        stacked: false, //
        // suggestedMin: 50, //
        // suggestedMax: 200, //
        weight: 0, //The weight used to sort the axis. Higher weights are further away from the chart area;
        ticks: {

        }
    },
    y: {
        // id: 'Weight (pounds)',
        type: 'linear',
        min: 100,
        max: 200,
    },
}