// chart border
// title and subtitle, maybe not add at all;
// owerlap legend or delete completely;
// axes labels:  increase font size
// axes labels:  owerlap
// 
export const radarOptions = {

    interaction: {
        mode: 'index',
    },
    plugins: {
        legend: {
            display: false,
        },
        tooltip: {
            position: 'nearest'
        }
    },

    scales: {
        r: {

            // SPECIFIC TO THE LINEAR RADIAL AXIS:
            animate: true, //default is true; whether to animate ther scaling from the centre. (or center..?) 
            angleLines: {
                display: true, //default is true
                color: 'red',
                lineWidth: 1, //default is 1
                // borderDash: static walue or a function; does not accept Array;
                // borderDashOffset: 0.0, //default is 0.0
            },
            beginAtZero: false, // if true, scales will include zero if not already included;
            pointLabels: {
                backdropColor: "darkslategrey",
                backdropPadding: 10, // default is 2
                borderRadius: 4, // default is 0
                display: true,
                // callback: function, 
                color: 'lime',
                font: {
                    size: "12px"
                },
                padding: 12, // default is 5
            },
            startAngle: 0, //default is 0; starting angle of the scale, in degrees, with 0 at the top.

            //COMMON TO ALL SCALES:
            // type: 'string',
            alignToPixels: false, //default is false; 
            // backgroundColor: 'color', 
            display: true, //default is true
            grid: {
                borderDash: 0, //default is 0? (hmm)
                borderDashOffset: 0.0, //default is 0.0
                // circular: true, //true for radial type..?
                color: 'green',
                display: true, // default os true;
                lineWidth: .25, //default is 1

            },
            min: -2,
            max: 2,
            //rewerse: false, //default is false;
            stacked: false, //if data should be stacked; separate section
            //suggestedMin: number, //
            //suggestedMax: number // 


            ticks: {

                //// SPECIFIC TO THE LINEAR RADIAL AXIS:
                // count: number,
                // format: {}, 
                // maxTicksLimit: 11, //default is 11
                // precision: number, 
                stepSize: 1,


            },

            //COMMON TO ALL SCALES:
            // backdropColor: 'color',
            // backdropPadding: 2, default is 2
            // callback: function, 
            display: true, //default is true
            // color: 'color',
            // font: 'font', 
            major: {}, //?
            padding: 3, //default is 3
            showLabelBackdrop: true, //default is true for radial axes, false for all others..?
            // textStrokeColor: 'color',
            textStrokeWidth: 0, //default is 0;
            weight: 0, //look into it 


            // title: {
            //     display: true,
            // },
        }
    }
}