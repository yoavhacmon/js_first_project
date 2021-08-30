const grades = [73, 91, 88, 56, 62, 84, 95, 96, 88, 92]
// your code goes here

function rangeOfGrades() {
    grades.sort(function (a, b) {
        return a - b
    });
    rangeOfGrades = grades[grades.length - 1] - grades[0];

    console.log(rangeOfGrades)
}

function median() {
    grades.sort(function (a, b) {
        return a - b
    });
    if (grades.length % 2 == 0) {
        let meansNum1 = grades.length / 2;
        let meansNum2 = grades.length / 2 + 1;
        median = (grades[meansNum1 - 1] + grades[meansNum2 - 1]) / 2;
        console.log(median)
    }
    else {
        let meansNum3 = Math.floor(grades.length / 2);
        median = grades[meansNum3]
        console.log(median)
    }
}
