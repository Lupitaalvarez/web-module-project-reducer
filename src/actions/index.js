export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";

export const CLEAR_DISPLAY = "CLEAR_DISPLAY"
export const MEMORY_PLUS = "MEMORY_PLUS"
export const MR = "MR"
export const MC = "MC"



export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (number) => {
    return ({type:CHANGE_OPERATION, payload:number});
}

export const clearDisplay = () => {
    return ({type:CLEAR_DISPLAY});
}

export const memoryPlus = () => {
    return ({type:MEMORY_PLUS})
}

export const mr = () => {
    return ({type:MR})
}

export const mc = () => {
    return ({type:MC})
}