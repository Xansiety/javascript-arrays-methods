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

const developers = []
for (let i = 0; i < students.length; i++) {
  if (students[i].course === 'Web Development') {
    developers.push(students[i])
  }
}
//console.log(developers)

// Forma optima
//ECMAScript 5 funcion anonima
const resultAnonima = students.filter(function(student) {
  if (student.course === 'Web Development') return true
})

// Con lambda
const result = students.filter(student => student.course === 'Web Development')

console.log(result)