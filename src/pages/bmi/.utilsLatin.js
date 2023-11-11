
// // min = random between 0 and 20
// // max = random between 30 and 500
// // slice it, get a string;
// // maxChar = 28
// // length by maxChars to fixed 0 = number of splits
// // split it


// function createLatinNotes(myString) {

//     let low = Math.random() * (20 - 0) + 0;
//     let high = Math.random() * (500 - 30) + 30;
//     let sliced = myString.slice(low, high)

//     console.log("sliced: ", sliced)
//     console.log("sliced.length: ", sliced.length)

//     let maxChar = 30
//     let leftovers = sliced.length % 28;
//     // let = sliced.split()
//     console.log("sliced.length % 28: ", sliced.length % 28)

//     // let maxSplits = ((sliced.length - leftovers) / maxChar) - 1
//     let maxSplits = ((sliced.length - leftovers) / maxChar)
//     console.log("maxSplits: ", maxSplits)

//     let myLines = []

//     for (let i = 0; i++; i <= maxSplits) {
//         console.log("i: ", i)
//         let line
//         if (i * maxChar < sliced.length) {

//             line = sliced.slice(i * maxChar, i * maxChar + maxChar)
//             console.log("line: ", line)
//         }
//         // else {
//         //     line = sliced.slice(i * maxChar)
//         // }
//         // console.log('line: ', line)
//         myLines.push(line)

//     }
//     console.log('myLines: ', myLines)
// }


// createLatinNotes(octopus[0])
