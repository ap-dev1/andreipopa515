
// FROM DOCUMENTATION, TO SEE WHERE THIS GO.
// NOTE PLUGINS!
// const chart = new Chart(ctx, {
//     type: 'line',
//     data: data,
//     options: {
//         plugins: {
//             title: {
//                 display: true,
//                 text: 'Custom Chart Title'
//             }
//         }
//     }
// });


export const chartTitle = {
    align: "center", //start, center, end
    color: "#555",
    display: true,
    fullSize: true,//Marks that this box should take the full width/height of the canvas. If false, the box is sized and placed above/beside the chart area.
    position: 'top',//left, bottom, right
    font: {
        weight: "bold",

    },
    padding: {
        top: 5,
        bottom: 5
    },
    text: "Weight (lbs) over time during fasting" //If specified as an array, text is rendered on multiple lines.
}




export const chartSubtitle = {
    align: "center", //start, center, end
    color: "#555",
    display: true,
    fullSize: true,//Marks that this box should take the full width/height of the canvas. If false, the box is sized and placed above/beside the chart area.
    position: 'top',//left, bottom, right
    font: {
        // weight: "bold",


    },
    padding: {
        top: 1,
        bottom: 1
    },
    text: "October-November 2023" //If specified as an array, text is rendered on multiple lines.
}