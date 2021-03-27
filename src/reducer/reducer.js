import { INITIAL_STATE } from "./initial";

export const reducer = (state = INITIAL_STATE, a) => {
    let newState = state;
    switch (a.type) {
        case "UP":
            newState = {
                ...state,
                count: state.count + 1
            };
            break;
        case "DOWN":
            newState = {
                ...state,
                count: state.count - 1
            };
            break;
        default:
            break;
    }
    console.log(newState)
    return newState;
};