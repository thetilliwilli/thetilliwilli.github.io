import React from "react";
import {withRouter, BrowserRouter as Router} from "react-router-dom";

const defaultLocale = {
    locale: null
};

const LocaleContext = React.createContext(defaultLocale);

function LocalizeHoc(ReactElement){
    return function(props){
        return (
            <LocaleContext.Consumer>
                {
                    locale => <ReactElement {...props} locale={locale} />
                }
            </LocaleContext.Consumer>
        );
    };
}
//<LocaleContext.Provider value={locale:locale}>
//</LocaleContext.Provider>
class LocaleExtractor extends React.Component
{
    render(){
        var locale = this.props.match.params.lang;
        return (
            <LocaleContext.Provider value={{locale}}>
                {this.props.children}
            </LocaleContext.Provider>
        );
    }
}
var LocaleExtractorWithRouter = withRouter(LocaleExtractor);

// var LocaleExtractorWithRouterInRouter = function(El){
//     props => <Router path="/:screen/:lang" > <El /> </Router>
// }

export { LocalizeHoc as Localize};
export { LocaleExtractorWithRouter as LocalizePlugin};

// export default {
//     Localize: LocalizeHoc,
//     LocalizePlugin: LocaleExtractorWithRouterInRouter
// };

// function PluginLocale(ReactAppElement){
//     // var ProviderWithRoute
//     ReactAppElement = withRouter(ReactAppElement);
//     return (
//         <LocaleContext.Provider>
//             <ReactAppElement />
//         </LocaleContext.Provider>
//     );
// }

// function Hoc(Element){
//     return function(props){
//         return 
//     };
// }