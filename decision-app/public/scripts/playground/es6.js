"use strict";

class People {
  constructor(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
  }

  greeting() {
    return "hello ".concat(this.name, " I am ").concat(this.age, " years old with ").concat(this.height);
  }

}

const david = People("David", 20, 180);