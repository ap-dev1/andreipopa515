
// NOTE:
//The doughnut, pie, and polar area charts override the legend defaults. To change the overrides for those chart types, the options are defined in 
//Chart.overrides[type].plugins.legend.

export const chartLegend = {
    display: false,
    position: 'top',//left, bottom, right, chartArea (the position is at the moment not configurable; it will always be on the left side of the chart in the middle.)
    align: "center", //start, center, end;
    // maxHeight: Number, // number, in pixels;
    // maxWeight: Number, // number, in pixels;
    fullSize: true,//Marks that this box should take the full width/height of the canvas (moving other boxes). This is unlikely to need to be changed in day-to-day use.
    reverse: false, //Legend will show datasets in reverse order.

    //rtl: Boolean, //true for rendering the legends from right to left.
    //textDirection: 'string', //This will force the text direction 'rtl' or 'ltr' on the canvas for rendering the legend, regardless of the css specified on the canvas
    title: {
        // color: chart defaults, //text color;
        display: false, //
        // font:{}, //chart defaults
        padding: 0, //
        text: "string", //
    },


    //labels: {}, //see below


    //onClick: function, //A callback that is called when a click event is registered on a label item. Arguments: [event, legendItem, legend]

    //onHover: function, //A callback that is called when a 'mousemove' event is registered on top of a label item. Arguments: [event, legendItem, legend].

    //onLeave: function, //A callback that is called when a 'mousemove' event is registered outside of a previously hovered label item. Arguments: [event, legendItem, legend].

}