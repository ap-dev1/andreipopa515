
export function rule110([nb1, nb2, nb3]) {
    // const rule_number = 110;
    // const rule_code = rule_number.toString(2);
    // console.log(nb1, nb2, nb3)
    const rule_code = '01101110';

    const wolfram_says = { "1,1,1": parseInt(rule_code[0]), "1,1,0": parseInt(rule_code[1]), "1,0,1": parseInt(rule_code[2]), "1,0,0": parseInt(rule_code[3]), "0,1,1": parseInt(rule_code[4]), "0,1,0": parseInt(rule_code[5]), "0,0,1": parseInt(rule_code[6]), "0,0,0": parseInt(rule_code[7]) };


    // Compute:
    let neighbours = nb1.toString() + "," + nb2.toString() + "," + nb3.toString();
    let resulting_cell_state = wolfram_says[neighbours];


    return resulting_cell_state;
};



// function randomChoice(arr) {
//     let xx = []
//     while (xx.length === 0) {
//         let a = arr[Math.floor(Math.random() * arr.length)]
//         if (a !== cellState) {
//             xx.push(a)
//         }
//     }

//     return xx[0]
// }

export function randomState(arr) {

    if (arr === []) {
        arr = [0, 1]
    }
    let a = arr[Math.floor(Math.random() * arr.length)]

    return a;
}

