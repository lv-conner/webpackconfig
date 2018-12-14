import React, { Component } from 'react'
import { render } from "react-dom";
class Index extends Component{
    render(){
        return (
            <div>Index Page Hello</div>
        )
    }
}

render(<Index/>,document.getElementById("root"));
