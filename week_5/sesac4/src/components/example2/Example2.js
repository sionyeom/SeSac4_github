import React from "react";
import "../../css/example2.css";

export const Example2 = props => {
  const {
    title = "나의 하루는 4시 40분에 시작된다",
    author = "김유진",
    price = "13,500",
    type = "자기계발서"
  } = props;
  return (
    <div className="container">
      <div className="container-header">이번주 베스트 셀러</div>
      <div className="picture" />
      <div className="text-container">
        <div className="title">
          {title}
        </div>
        <div className="author sub-text">
          저자: {author}
        </div>
        <div className="price sub-text">
          판매가: {price}원
        </div>
        <div className="type sub-text">
          구분: {type}
        </div>
      </div>
    </div>
  );

  
  
};
