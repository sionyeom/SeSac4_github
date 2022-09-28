import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Example3 extends Component {
  render() {
    let { text, valid } = this.props;
    // 그리고 text 값을 받아오지 못하면 "이건 기본 text props입니다."라는 문구가 출력되게 해주세요.
    let result = text ? text : `이건 기본 text props입니다.`;
    console.log(result);
    valid = () => {
      console.log("콘솔 띄우기 성공!");
    };
    return (
      <div>
        <h1>히히히</h1>
        <button onClick={valid}>콘솔 메시지</button>
      </div>
    );
  }
}
Example3.defaultProps = {
  text: "필수 props",
  valid: () => {
    console.log(true);
  }
};

Example3.propTypes = {
  text: PropTypes.string.isRequired
};
