import React from "react";
import { render } from "react-dom";
import { App } from "./App";
import { Provider } from "react-redux";
import { createAppStore } from "./reducer";

render(
    <Provider store={createAppStore()}>
        <App />
    </Provider>, document.getElementById("root")
);
