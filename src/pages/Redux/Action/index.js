export const userScript = (script = '') => {
    return {
        type: "userScript",
        payload: script
    }
}