import React, { Component, createRef } from "react";

export default class Example8 extends Component {
    outDiv = createRef();
    inDiv = createRef();
    constructor(props) {
        super(props);
        this.outDiv = createRef();
        this.inDiv = createRef();
      }


  render() {

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
        this.outDiv.current.scrollTop = this.inDiv.current.scrollHeight
    }
    return <>
    <div style={divStyle} ref={this.outDiv}>
        <div style={innerDiv} ref={this.inDiv}>
        </div>
    </div>
    <button onClick={handleOnclick}>맨 밑으로</button>
    </>;
  }
}
