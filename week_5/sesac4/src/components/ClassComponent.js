import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ClassComponent extends Component {
  render() {
    const { name, location, age } = this.props;

    return (
      <div>
        {this.props.children}
        {name}
        {location}
      </div>
    );
  }
}

ClassComponent.defaultProps = {
  name: "시온",
  location: "서울",
  age: 26,
  children: "히히"
};

ClassComponent.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string,
  age: PropTypes.number,
  children: PropTypes.string
};
