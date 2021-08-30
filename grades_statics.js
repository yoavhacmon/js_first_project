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

function secondHalf() {
    if (grades.length % 2 == 0) {
        let meansNum = grades.length/2
        secondHalf = grades.slice(meansNum, grades.length)
        console.log(secondHalf)
    }
    else {
        let meansNum = Math.floor(grades.length / 2)
        secondHalf = grades.slice(meansNum, grades.length)
        console.log(secondHalf)
    }    


}