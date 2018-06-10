import App from "./app.js";
import Enviroment from "./enviroment.js";
import AppRunner from "./appRunner.js";

const rootElementId = "app";

function RunApp(){

    var runner = new AppRunner();

    runner.Compile(App, Enviroment)
        .Mount(rootElementId)
        .Run();
}

RunApp();//invoke