import { createStore } from "redux";
import { INITIAL_STATE } from "./initial";
import { reducer } from "./reducer";

export const createAppStore = () => {
        return createStore(
            reducer,
            INITIAL_STATE
        );
}