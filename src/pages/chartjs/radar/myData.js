

// labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
const axesNames = [
    "Sensitivity",
    "Behavior frequency",
    "Acquired reinforcers",
    "Bout frequency",
    "Bout length (responses/bout)",
    "Bout duration (Darwinian cycles/bout)",
    "Sustained behavior (%)",
    "Changeovers (R)",
    "Inter Bout Interval (IBI) (R)",
    "Delta phenotype (R)"
]

// nothing is reersed here, unlike in other publications;
// discrepancies are due to the population on which 
// z-scores were calculated. They are small and besids the 
// point of this web page and its content.
const shortAxesNames = [
    "a",
    "CO",
    "All B",
    "All r",
    "Bouts",

    "Avg length",
    "%",
    "IBI"
]

const longAxesNames = [
    "Sensitivity (a)",
    "Changeovers (CO)",
    ["All target", "responses (R)"],
    ["Acquired ", "reinforcers (r)"],
    "Bout frequency",

    ["Bout length", " (R/bout)"],
    //"Bout duration (Darwinian cycles/bout)",
    "Bout responses (%)",
    ["Inter Bout", " Interval (IBI)"],
    //"Delta phenotype (R)"
]




export const myData = {
    labels: longAxesNames,
    datasets: [
        {
            data: [1.16, 0.21, 0.40, -0.15, 1.54, -0.04, 1.12, 0.64,
            ],
            label: "10%",
            borderColor: "#3cba9f",
            backgroundColor: "rgb(62,149,205,0.1)",
            borderWidth: 2,
        },
        {
            data: [-0.32, -0.89, -0.52, -0.32, -0.43, -0.35, -0.47, 0.22
            ],
            label: "50%",
            borderColor: "#ffa500",
            backgroundColor: "rgb(60,186,159,0.1)",
            borderWidth: 2,

        },
        {
            data: [-1.16, -0.26, -0.60, -0.35, -1.19, -0.38, -1.31, -0.87
            ],
            label: "100%",
            borderColor: "#c45850",
            backgroundColor: "rgb(255,165,0,0.1)",
            borderWidth: 2,

        },
        // {
        //     data: [6, 3, 2, 2, 7, 0, 16],
        //     label: "Rejected",
        //     borderColor: "", // #3e95cd, darker blue, this was first dataset;
        //     backgroundColor: "rgb(196,88,80,0.1)",
        //     borderWidth: 2,
        // }
    ]
}

