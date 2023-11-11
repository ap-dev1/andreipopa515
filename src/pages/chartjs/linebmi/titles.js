
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
        size: 16

    },
    padding: {
        top: 5,
        bottom: 5
    },
    text: "Powerful tooltips" //If specified as an array, text is rendered on multiple lines.
}




export const chartSubtitle = {
    align: "center", //start, center, end
    color: "#555",
    display: true,
    fullSize: true,//Marks that this box should take the full width/height of the canvas. If false, the box is sized and placed above/beside the chart area.
    position: 'top',//left, bottom, right
    font: {
        size: 12,
    },
    padding: {
        top: 0,
        bottom: 15
    },
    text: "enabled by default, flexible, easy to work with" //If specified as an array, text is rendered on multiple lines.
}