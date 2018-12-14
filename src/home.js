import React, { Component } from 'react'
import ReactDOM from "react-dom";
import { render } from "react-dom";
import Header from "./components/Header";
class App extends Component{
    render(){
        return (
            <div>
                <Header></Header>
            </div>
        )
    }
}

render(<App/>,document.getElementById("root"));
