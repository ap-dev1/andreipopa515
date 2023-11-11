
// FROM DOCUMENTATION:
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

//==============================================================

// const footer = (tooltipItems) => {
//     let sum = 0;

//     tooltipItems.forEach(function(tooltipItem) {
//       sum += tooltipItem.parsed.y;
//     });
//     return 'Sum: ' + sum;
//   };
//
//


import { parse } from "html-react-parser"

//--------------------------------------------------------------
const beforeTitle = (tooltipItems) => {
    let bt;
    tooltipItems.forEach(function (tooltipItem) {
        //console.log("tooltipItem: ", tooltipItem)
        bt = tooltipItem.formattedValue
    });

    return bt + ' lbs' + ' (before title)';
};
//--------------------------------------------------------------
const afterTitle = (tooltipItems) => {
    let bt;
    tooltipItems.forEach(function (tooltipItem) {
        //console.log("tooltipItem: ", tooltipItem)
        bt = tooltipItem.formattedValue
    });

    return bt + ' lbs' + ' (after title)';
};
//--------------------------------------------------------------
const beforeLabel = (tooltipItems) => {
    // let bt;
    // tooltipItems.forEach(function (tooltipItem) {
    //     console.log("tooltipItem: ", tooltipItem)
    //     bt = tooltipItem.formattedValue
    // });

    return "before label";
};
//--------------------------------------------------------------
// const label = (tooltipItems) => {
//         return tooltipItems.formattedValue + ' lbs';
// };

const label = (tooltipItems) => {
    //tooltipItem.dataset.notes[tooltipItem.dataIndex]
    //console.log("tooltipItem.dataset.bmi: ", tooltipItems.dataset.bmi[tooltipItems.dataIndex])
    let metric = parseFloat(tooltipItems.formattedValue) / 2.204623
    let a = parseFloat(tooltipItems.formattedValue).toFixed(0) + 'lbs ('
    let b = metric.toFixed(1) + 'kg), bmi '
    let c = tooltipItems.dataset.bmi[tooltipItems.dataIndex]
    return a + b + c;
};


//--------------------------------------------------------------
const afterLabel = (tooltipItems) => {
    // let bt;
    // tooltipItems.forEach(function (tooltipItem) {
    //     console.log("tooltipItem: ", tooltipItem)
    //     bt = tooltipItem.formattedValue
    // });

    return "6'3 (191cm)";
};
//--------------------------------------------------------------
// const beforeBody = (tooltipItems) => {
//     let bt;
//     tooltipItems.forEach(function (tooltipItem) {
//         bt = tooltipItem.formattedValue
//     });
//     return "before body";
// };
//--------------------------------------------------------------


// const afterBody = (tooltipItems) => {
//     let abNotes;
//     tooltipItems.forEach(function (tooltipItem) {
//         console.log("tooltipItem.dataset.notes: ", tooltipItem.dataset.notes)
//         console.log("tooltipItem.dataIndex: ", tooltipItem.dataIndex)
//         console.log("tooltipItem.dataset.notes[dataIndex]: ", tooltipItem.dataset.notes[tooltipItem.dataIndex])
//         abNotes = tooltipItem.dataset.notes[tooltipItem.dataIndex]
//     });
//     return abNotes !== "notes" ? abNotes : "";
// };


const afterBody = (tooltipItems) => {
    let latinNotes;
    tooltipItems.forEach(function (tooltipItem) {
        latinNotes = tooltipItem.dataset.latinNotes[tooltipItem.dataIndex]
    });

    return latinNotes;

};


//--------------------------------------------------------------
// const footer = (tooltipItems) => {
//     let aa;
//     tooltipItems.forEach(function (tooltipItem) {
//         aa = tooltipItem.formattedValue
//     });
//     return aa + ' lbs' + ' (footer)';
// };



//============================================================
// const label = (tooltipItems) => {
//     let bb;
//     tooltipItems.forEach(function (tooltipItem) {
//         console.log("tooltipItem.label: ", tooltipItem.label)
//         bb = tooltipItem.formattedValue
//     });

//     return "";
// };

export const chartTooltipsCustom = {
    // enabled: true,
    // external: null, //function; see section;
    // mode: "string", // default = interaction.mode; Sets which elements appear in the tooltip; see section;
    // intersect: true, //If true, the tooltip mode applies only when the mouse position intersects with an element. If false, the mode will be applied at all times.
    // position: "average", // 'average' mode will place the tooltip at the average position of the items displayed in the tooltip. || 'nearest' will place the tooltip at the position of the element closest to the event position. ||'custom' see below



    // backgroundColor: 'rgba(0, 0, 0, 0.8)',
    // titleColor: '#fff',
    // titleFont: {
    //     weight: 'bold',
    // },
    // titleAlign: "left", //right, or center; horizontal alignment of the title text lines. same for "bodyAlign" and "footerAlign"
    // titleSpacing: 2, //Spacing to add to top and bottom of each title line;
    // titleMarginBottom: 6, //Margin to add on bottom of title section;
    // bodyColor: '#fff', //Color of body text.
    // bodyFont: {

    // },

    // // BODY and FOOTER have the same properties and same default values as TITLE; the body does not the marginTop option;
    // padding: 6, //Padding inside the tooltip;
    // caretPadding: 6, // Extra distance to move the end of the tooltip arrow away from the tooltip point;
    // caretSie: 5, //Size, in px, of the tooltip arrow;
    // cornerRadius: 6, //number or object; radius of tooltip corner curves.
    // multiKeyBackground: "fff", //Color to draw behind the colored boxes when multiple items are in the tooltip.
    // displayColors: true, //If true, color boxes are shown in the tooltip.
    // // boxWidth: bodyFont.size, // Width of the color box if displayColors is true.
    // // boxHeight: bodyFont.size, // Height of the color box if displayColors is true.
    // boxPadding: 1, //Padding between the color box and the text.
    // usePointStyle: false, //Use the corresponding point style (from dataset options) instead of color boxes, ex: star, triangle etc. (size is based on the minimum value between boxWidth and boxHeight).
    // borderColor: 'rgba(0, 0, 0, 0)',
    // borderWidth: 0,
    // rtl: true, //true for rendering the tooltip from right to left.
    // textDirection: "canvas' default", // This will force the text direction 'rtl' or 'ltr' on the canvas for rendering the tooltips, regardless of the css specified on the canvas
    // xAlign: 'undefined', // left||center||right; Position of the tooltip caret in the X direction.
    // yAlign: 'undefined', // top||center||bottom; Position of the tooltip caret in the Y direction.

    // itemSort: function, see section
    // filter: function, see section

    callbacks: {

        //beforeTitle: beforeTitle,
        //afterTitle: afterTitle,
        //beforeLabel: beforeLabel,
        label: label,
        afterLabel: afterLabel,
        //beforeBody: beforeBody,
        afterBody: afterBody,
        //label: label,
        //footer: footer,
    },

};
