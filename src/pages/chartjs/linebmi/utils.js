// make arrays with labels and data points from an object's keys:



export function getLabels(obj) {
    // console.log("obj: ", obj)
    let result = obj.map(a => a.label)
    // console.log("result: ", result)
    // console.log("result[1]: ", result[1])
    return result
}


export function getValues(obj) {
    let result = obj.map(a => a.value)
    // console.log("result: ", result, "; ", result[1])
    return result
}


export function getDates(obj) {
    // let result = obj.map(a => a.date)
    let result = obj.map(a => a.date)

    // console.log("result: ", result, "; ", result[1])
    return result
}


export function getStamps(obj) {
    let result = obj.map(a => a.timestamp)
    // console.log("result: ", result, "; ", result[1])
    return result
}


export function getPounds(obj) {
    let result = obj.map(a => a.pounds)
    return result
}


export function getGlucose(obj) {
    let result = obj.map(a => a.glucose)
    // console.log("result: ", result, "; ", result[1])
    return result
}



export function getNotes(obj) {
    let result = obj.map(a => a.notes)
    // console.log("result: ", result, "; ", result[1])
    return result
}




export function getCustomLabels(obj) {
    let result = obj.map(a => a.label)
    // console.log("result: ", result, "; ", result[1])
    return result
}


export function getLatinNotes(obj) {
    let result = obj.map(a => a.latinNotes)
    return result
}


export function getLatinTranslation(obj) {
    let result = obj.map(a => a.latinTranslation)
    return result
}




