import { getAverage } from "./average.js";
import { getGrade } from "./grade.js";
import { hasPassingGrade } from "./passingGrade.js";

function studentMsg(totalScores, studentScore) {
    const average = getAverage(totalScores);
    const grade = getGrade(studentScore);
    const passing = hasPassingGrade(studentScore);

    if (passing) {
        return `Class average: ${average}. Your grade: ${grade}. You passed the course.`;
    }
    return `Class average: ${average}. Your grade: ${grade}. You failed the course.`;
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));