import React from "react";
import { useState } from "react";

function App() {
  const [list, setList] = useState(["dog", "cat", "rabbit"]);

  let newList = [];

  for (let i = 0; i < list.length; i++) {
    if (list[i].length > 4) newList.push(list[i]);
  }

  // let result = list.filter((val, i) => {
  //   return l;
  // });

  const addElement = () => {
    let arrList = list;
    arrList.push("good");
    // console.log(arrList);
    return setList([...arrList]);
  };

  const filterElement = () => {
    let arrList = list;
    arrList.filter((val, index) => {
      return val.includes("a");
    });
    console.log(arrList);
  };

  return (
    <div>
      <ul>
        {list.map((name, i) => {
          return (
            <li key={i}>
              {i}. {name}
            </li>
          );
        })}
      </ul>
      <ul>
        {list.filter(name => {
          return (
            <li>
              {name.includes("a")}
            </li>
          );
        })}
      </ul>
      <button onClick={addElement}>추가</button>
    </div>
  );
}

export default App;
