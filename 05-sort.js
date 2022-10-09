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

const resultSorted = students.sort(function(first, second) {
  if (first.age > second.age) {
    return 1
  }
  else {
    return -1
  }
})
console.log({ resultSorted })

const resultSortedArrow = students.sort((a, b) => a.age > b.age ? 1 : -1)
console.log({ resultSortedArrow })

const resultSortedResta = students.sort((a, b) => a.age - b.age)
console.log({ resultSortedResta })

const numbers = [10, 30, 1000, 100]
console.log(numbers.sort())
console.log(numbers.sort((a, b) => a - b))