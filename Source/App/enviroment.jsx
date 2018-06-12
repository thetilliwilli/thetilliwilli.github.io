import React from "react";
import {BrowserRouter as Router} from "react-router-dom";

export default class Enviroment extends React.Component
{
    render(){
        return (
            <Router>
                <div>
                    {this.props.children}
                </div>
            </Router>
        );
    }
}