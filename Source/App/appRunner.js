import React from "react";
import ReactDOM from "react-dom";

export default class AppRunner {
    constructor() {
        this.compiledApp = null;
        this.rootElement = null;
    }

    Compile(App, Enviroment) {
        this.compiledApp = <Enviroment> <App /> </Enviroment>;
        return this;
    }

    Mount(elementId) {
        this.rootElement = document.getElementById(elementId);
        if (!this.rootElement)
            throw new Error(`элемент не найден`);
        return this;
    }

    Run() {
        ReactDOM.render(this.compiledApp, this.rootElement);
        return this;
    }
}