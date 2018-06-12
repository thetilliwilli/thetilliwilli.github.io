import React from "react";
import {Route, Link} from "react-router-dom";

import Home from "../Screen/home.jsx";
import Portfolio from "../Screen/portfolio.jsx";
import About from "../Screen/about.jsx";


export default class App extends React.Component
{
    render(){
        return (
            <div>
                <div>
                    <div>

                        <Link to="home">home</Link>
                    </div>
                    <div>
                        <Link to="portfolio">portfolio</Link>

                    </div>
                    <div>
                        <Link to="about">about</Link>

                    </div>
                </div>

                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/about" component={About} />
            </div>
        );
    }
}

// class AppWrapper
// {
//     constructor(){
//         this.screens = [];
//     }

//     AddScreen(screen){
//         this.screens.push(screen);
//     }

//     Compile()
// }