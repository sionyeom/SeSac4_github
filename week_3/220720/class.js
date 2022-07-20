class Cat {
  constructor(name, age) {
    // 속성
    this.name = name;
    this.age = age;
  }

  // 메소드
  mew(name = this.name) {
    console.log(name + " 야옹");
  }

  eat() {
    console.log("먹이를 먹습니다.");
  }
}

var cat1 = new Cat("나비");
var cat2 = new Cat("냥이");
cat1.mew();
