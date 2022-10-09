// sample array of students
const students = [
  {
    name: "Jill",
    lastname: "Doe",
    age: 24,
    course: "Marketing",
  },
  {
    name: "John",
    lastname: "Doe",
    age: 22,
    course: "Web Development",
  },
  {
    name: "Jack",
    lastname: "Doe",
    age: 20,
    course: "Accounting",
  },
  {
    name: "Ryan",
    lastname: "Ray",
    age: 23,
    course: "Web Development",
  },
  {
    name: "Jane",
    lastname: "Doe",
    age: 20,
    course: "Financial Management",
  },
];

// Write your code here!

// Solo retorna un valor booleano si se cumple la condicion dada si al menos se encuentra uno que la cumpla

const result = students.some(function(student) {
  if (student.age > 23) {
    return true
  }
})
console.log({ result })


const resultLastName = students.some(function(student) {
  if (student.lastname === 'Doe') {
    return true
  }
})
console.log({ resultLastName })


const resultLastNameArrow = students.some((student) => student.lastname === 'Doe')
console.log({ resultLastNameArrow })