import React, { Component, PureComponent } from "react";
import ReactDOM from 'react-dom';

const Title = React.createElement(
    "h1",
   null,
    "create element"
    );


function Alla(){
    return (
        <h1> function component</h1>
    );
}
class Kek extends PureComponent{
    constructor(){
        super();
    }
    render(){
        return(
            <h1> PureComponent</h1>
        )
    }
}
class Ololo extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <React.Fragment>
                <Alla />
                {Title}
                <Kek />
                <h1> component </h1>
            </React.Fragment>
        );
    }
}
ReactDOM.render(<Ololo />, document.getElementById("root"));
