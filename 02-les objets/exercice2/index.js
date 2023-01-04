// Calculez la moyenne des notes du student et assignez cette moyenne à sa propriété average.

let student = {
    name : "Steven",
    age : 19,
    grades : [12, 14, 8],
    average : 0
};

let grades_sum = 0;

for (student.grade of student.grades)
{
    grades_sum = grades_sum + student.grade;
}

student.average = grades_sum/student.grades.length;

console.log(student.name);
console.log(student.age);
console.log(student.grades);
console.log(student.average);