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
const result = students.map(({ name, lastname, age }) => ({
  student: `${name} ${lastname}`,
  age
}))
  .filter(student => student.age > 20)
  .sort((a, b) => b.age - a.age)
  .reduce((total, student) => total + student.age, 0)


console.log(result)
