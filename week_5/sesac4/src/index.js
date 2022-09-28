import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ClassComponent from "./components/ClassComponent";
import { FunctionComponent } from "./components/FunctionComponent";
import { Example1 } from "./components/example1/Example1"; 
import { Example2 } from "./components/example2/Example2";
import Example3 from "./components/example3/Example3";
import { Example4_1 } from "./components/example4/Example4_1";
import { Example4_2 } from "./components/example4/Example4_2";
import { Map } from "./components/map/Map";
import { Example5 } from "./components/example5/Example5";
import Example6 from "./components/example6/Example6";
// import Example7 from "./components/example7/Example7";
import Ref from "./components/ref/Ref";
// import { Map } from "./components/map/Map";
// import Inherit from "./components/inherit/Inherit";
import Example8 from "./components/example8/Example8";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import "./App.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <ClassComponent name={"sion"} age={25}>ㅁㄴ임ㄴ;암ㄴ;ㅣㅏㅇ</ClassComponent> */}
    {/* <FunctionComponent name={"sion"} age={25}>dsds</FunctionComponent> */}
    {/* <Example1 food={"냉면"}/> */}
    {/* <Example2 title={"제목"} author={"염시온"} price={"30,000"} type={"교과서"}/> */}
    {/* <Example3 text={"리액리액"}/> */}
    <Example8/>
    {/* <Ref/> */}
    {/* <Example4_2/> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
