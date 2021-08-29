class Human {
  public age: number;
  public gender: string;
  public name: string;
  constructor(age: number, gender: string, name: string) {
    this.age = age;
    this.gender = gender;
    this.name = name;
  }
}

const nayeon = new Human(18, "Prefer not to say", "Nayeon");

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, your gender is "${person.gender}"!`;
};

console.log(sayHi(nayeon));

export {};
