const grades = [73, 91, 88, 56, 62, 84, 95, 96, 88, 92]
// your code goes here

function rangeOfGrades() {
    grades.sort(function (a, b) {
        return a - b
    });
    rangeOfGrades = grades[grades.length - 1] - grades[0];

    console.log(rangeOfGrades)
}
