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
const resultFunction = students.find(function(student) {
  if (student.name === 'Ryan') { return 1 }
})

const resultArrow = students.find(s => s.name === 'Ryan')

// Por defecto se retorna undefined si no se encuentra nada
const resultArrowUndefined = students.find(s => s.name === 'RyanX')

console.log({ resultFunction })
console.log({ resultArrow })
console.log({ resultArrowUndefined })