import React from "react";

export const Example4_1 = () => {
  const name = "염시온";
  const my_style = {
    backgroundColor: "blue",
    color: "orange",
    fontSize: "40px",
    padding: "12"
  };
  return (
    <div style={my_style}>
      {name}
    </div>
  );
};
