import React from "react";
import style from "./6CSSModule.module.css";
import Names from "classnames";

export const CSSModule = () => {
  return (
    <div className={Names(style.box1, style.center)}>
      <h2>CSS module</h2>
    </div>
  );
};
