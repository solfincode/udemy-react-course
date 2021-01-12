class People {
  constructor(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
  }

  greeting() {
    return `hello ${this.name} I am ${this.age} years old with ${this.height}`;
  }
}

const david = People("David", 20, 180);
