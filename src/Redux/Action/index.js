export const userScript = (script = '') => {
    return {
        type: "userScript",
        payload: script
    }
}
export const userPocName = (script = '') => {
    return {
        type: "PocName",
        payload: script
    }
}

export const userPocImage = (script = '') => {
    return {
        type: "PocImage",
        payload: script
    }
}
