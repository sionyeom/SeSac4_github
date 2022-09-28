import React from "react";

export const Example1 = props => {
  // 음식 소개 문구
  const { food = "족발" } = props;
  const fontStyle = { color: "red" };
  return (
    <div>
      제가 제일 좋아하는 음식은 <span style={fontStyle}>{food}</span>입니다
    </div>
  );
};
