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
//ECMAScript 5
const fullNames = students.map((student) => {
  return student.name + ' ' + student.lastname
})

// ECMAScript 6
const fullNames = students.map(student => student.name + ' ' + student.lastname)

// alterar el objeto
const fullNames = students.map(student => {
  return {
    fullname: student.name + ' ' + student.lastname,
    age: student.age,
    Course: student.course
  }
})


// Spread Operator
const fullNames = students.map(student => {
  return {
    ...student,
    title: student.name + ' - ' + student.course
  }
})


// podemos sobrescribir una propiedad pero esta siempre debe ir despues del spread
const fullNames = students.map(student => ({
  ...student,
  course: 'Programming'
}))

const newCourses = students.map(student => ({
  ...student,
  course: 'Programming'
}))

const doubleAge = newCourses.map(student => ({ ...student, doubleAge: student.age * 2 }))


// encadenar map
const doubleAge = students.map(student => ({
  ...student,
  course: 'Programming'
})).map(student => ({ ...student, doubleAge: student.age * 2 }))


console.log(doubleAge)

// El arreglo original no se muta
//console.log(students)


