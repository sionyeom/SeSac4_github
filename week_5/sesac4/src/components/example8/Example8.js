import React, { Component, createRef } from "react";
import { Input } from "../input/Input";
export default class Example8 extends Component {
    outDiv = createRef();
    inDiv = createRef();
    test = createRef();
    constructor(props) {
        super(props);
        this.outDiv = createRef();
        this.inDiv = createRef();
      }
  render() {
    // console.log(this.test.current);

    const divStyle = {
        height : "400px",
        width : "300px",
        overflow : "auto"
    }
    const innerDiv = {
        height : "900px",
        width : "100%",
        backgroundColor : "black"
    }

    const handleOnclick = () => {
        // console.log(this.inDiv.current.scrollHeight);
        // this.outDiv.current.scrollTop = this.inDiv.current.scrollHeight
        console.log(this.test.current);
    }

    return <>
    <div style={divStyle} ref={this.outDiv}>
        <div style={innerDiv} ref={this.inDiv}>
        </div>
    </div>
    <button onClick={handleOnclick}>맨 밑으로</button>
    <Input ref={this.test}/>
    </>;
  }
}
