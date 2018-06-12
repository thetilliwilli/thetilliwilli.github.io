import React from "react";
import {Route, Link, Redirect} from "react-router-dom";
import loc from "../Component/Locale/index.js";

import Home from "../Screen/home.jsx";
import Portfolio from "../Screen/portfolio.jsx";
import About from "../Screen/about.jsx";
import {Localize} from "../Component/Locale/withLocale.jsx";

// const Localink = Localize(
//     (props => <Link />)
// );

export default class App extends React.Component
{
    render(){
        var links = ["/home/ru", "/portfolio/ru", "/about/en"].map(
            (link, i) => <div key={i}><Link to={link}>{link}</Link></div>
        );
        return (
            <div>
                <div>
                    {links}
                </div>

                <Route exact path="/" component={Home}> <Redirect to="/home" /> </Route>
                <Route path="/home" component={Home} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/about" component={About} />

                <Route path="/:screen/:lang" render={props=>JSON.stringify(props.match.params)} />
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