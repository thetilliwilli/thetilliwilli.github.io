import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {LocalizePlugin} from "../Component/Locale/withLocale.jsx";

export default class Enviroment extends React.Component
{
    render(){
        return (
            <Router>
                <LocalizePlugin>
                    <div>
                        {this.props.children}
                    </div>
                </LocalizePlugin>
            </Router>
        );
    }
}