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

const developers = [
  {
    id: 1,
    name: "John",
    skills: ["HTML", "React", "JavaScript", "Java"],
  },
  {
    id: 2,
    name: "Jane",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "NodeJS"],
  },
  {
    id: 3,
    name: "Jack",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "NodeJS"],
  },
];

// Write your code here!
let totalFor = 0
for (let i = 0; i < students.length; i++) {
  totalFor += students[i].age
}
console.log({ totalFor })

// Metodo Reduce
const reduceTotalEMC5 = students.reduce(function(total, student) {
  return total + student.age
}, 0)
console.log({ reduceTotalEMC5 })

const reduceTotal = students.reduce((total, student) => total + student.age, 0)
console.log({ reduceTotal })


// Combinando todo en un solo
// con set evitamos la duplicidad
const result = developers.reduce(function(allSkill, student) {
  return Array.from(new Set([...allSkill, ...student.skills]))
}, [])

console.log({ result })