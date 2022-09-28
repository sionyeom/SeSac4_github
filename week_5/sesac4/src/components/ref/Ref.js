import React, { Component, createRef } from "react";

export default class Ref extends Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
      }
    event1= () => {
        let input = document.getElementById("input1");
        console.log(input.value);
    }
    event2= () => {
        console.log(this.input.value);
    }
    input3 = createRef();
    event3 = ()=>{
        const {id, value} = this.textInput.current;
        console.log(value);
    }
    
  render() {
    return (
        <>
        
        <div>
            <input type="text" id="input1" />
            <button onClick={this.event1}>클릭1</button>        
        </div>
        <div>
            <input type="text" ref={ref => {this.input = ref}}/>
            <button onClick={this.event2}>클릭2</button>        
        </div>
        <div>
            <input type="text" id="dsd"ref={this.textInput}/>
            <button onClick={this.event3}>클릭3</button>        
        </div>
        </>
    );
  }
}
