import React, { Component } from "react";

export default class Inherit extends Component {
  render() {
    return <div>Inherit</div>;
  }
}

class Shape {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }
  getArea() {
    return this.w * this.h;
  }
}

class Square extends Shape {
  constructor(w, h) {
    super(w, h);
  }
}

class Triangle extends Shape {
  constructor(w, h, name) {
    super(w, h);
    this.name = name;
  }

  getArea() {
    return this.w * this.h / 2;
  }
}

let shape1 = new Shape(5, 4);
let shape2 = new Square(3, 4);
let shape3 = new Triangle(6, 3);
console.log(shape1.getArea());
console.log(shape2.getArea());
console.log(shape3.getArea());
