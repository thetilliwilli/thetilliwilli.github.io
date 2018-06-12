import App from "./app.jsx";
import Enviroment from "./enviroment.jsx";
import AppRunner from "./appRunner.js";

const rootElementId = "app";

function RunApp(){

    var runner = new AppRunner();

    runner.Compile(App, Enviroment)
        .Mount(rootElementId)
        .Run();
}

RunApp();//invoke