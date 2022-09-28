import React from "react";

export const FunctionComponent = props => {
  const { name = "minho", age = "10" } = props;
  console.log(props.children);
  return (
    <div>
      {props.children}
      {name}
    </div>
  );
};
