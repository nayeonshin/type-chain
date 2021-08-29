interface Human {
  age: number;
  gender: string;
  name: string;
}

const person = {
  age: 999,
  gender: "Prefer not to say",
  name: "Nayeon",
};

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, your gender is "${person.gender}"!`;
};

console.log(sayHi(person));

export {};
