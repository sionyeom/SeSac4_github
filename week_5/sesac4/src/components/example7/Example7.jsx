import React, { Component } from "react";

export default class Example7 extends Component {
  render() {
    return <div>Example7</div>;
  }
}

class Student {
  constructor(name, school, age, idNum) {
    this.name = name;
    this.age = age;
    this.school = school;
    this.idNum = idNum;
  }

  getInfo() {
    return `이름 : ${this.name}
나이 : ${this.age}
학교 : ${this.school}
학번 : ${this.idNum}`;
  }
}

class Kim extends Student {
  constructor(name, school, age, idNum, phone) {
    super(name, school, idNum, age);
    this.phone = phone;
  }

  getPhone() {
    return `핸드폰 번호 : ${this.phone}`;
  }
}

class Lee extends Student {
  constructor(name, school, idNum, age, weight) {
    super(name, school, idNum, age);
    this.weight = weight;
  }

  getWeigh() {
    return `몸무게 : ${this.weight}Kg`;
  }
}

const lee = new Lee("sohyun", "highschool", "17", "1", "70");
const kim = new Kim("taehyun", "highschool", "18", "2", "010-0000-0000");

console.log(lee.getInfo());
console.log(lee.getWeigh());
console.log(kim.getInfo());
console.log(kim.getPhone());
