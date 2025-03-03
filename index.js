// Exercise 1
// เขียนโปรแกรมที่หาเลขจำนวนเต็มที่มากที่สุด ระหว่างเลขจำนวนเต็มสองตัว
const findMaxFromTwoValues = (x, y) => {
    return Math.max(x, y);
};
let ansEx1 = `Max value is: ${findMaxFromTwoValues(10, 20)}`;
document.getElementById("ansEx1").innerHTML = ansEx1;

// Exercise 2
// เขียนโปรแกรม JS โดยใช้ condition statement
// เพื่อหาเครื่องหมายของผลลัพธ์ที่ได้จากการคูณกันของตัวเลข 3 ตัว
const findSign = (x, y, z) => {
    return `The sign is ${(x*y*z === 0) ? 0 : (x*y*z > 0) ? "+" : "-"}`;
};
let ansEx2 = findSign(1, -2, 3);
document.getElementById("ansEx2").innerHTML = ansEx2;


// Exercise 3
// เขียนโปรแกรม JS โดยใช้ conditional statement
// เพื่อเรียงตัวเลข 3 ตัว จากค่ามากไปหาค่าน้อย
const sortDescending = (x, y, z) => {
    return [x, y, z].sort((x, y) => y - x);
};
let ansEx3 = `Sort in descending: ${sortDescending(6,1,77).join(", ")}`;
document.getElementById("ansEx3").innerHTML = ansEx3;

// Exercise 4
// เขียนโปรแกรม JS โดยใช้ conditional statement
// เพื่อหาตัวเลขที่มีค่ามากที่สุด จากตัวเลข 5 ตัว
const findMaxFromFiveValues = (a, b, c, d, e) => {
    return Math.max(a, b, c, d, e);
};
let ansEx4 = `Max value is: ${findMaxFromFiveValues(1, 2, 3, 4, 5)}`;
document.getElementById("ansEx4").innerHTML = ansEx4;

//Exercise 5
// เขียนโปรแกรม JS โดยใช้ loop เพื่อทำซ้ำกระบวนการตั้งแต่เลข 0 ถึง 15
// โดยที่ในแต่ละรอบของการทำซ้ำ ใช้ทำการเช็กว่าตัวเลข ณ รอบนั้น เป็นเลขคู่ หรือ เลขคี่
// และให้แสดงผลลัพธ์เป็นข้อความในหน้าจอ ดังนี้
// "0 is even"
// "1 is odd"
// "2 is even"
// ..
// "15 is odd"
const printOddEven = (count)=> {
    let answer = "";
    for (let index = 0; index <= count; index++) {
        answer += `"${index} is ${index % 2 === 0 ? "even" : "odd"}"<br>`;
    }
    return answer;
};
let ansEx5 = printOddEven(15);
document.getElementById("ansEx5").innerHTML = ansEx5;

// Exercise 6
// เขียนโปรแกรม JS เพื่อแสดงผลลัพธ์ให้ออกมาตามรูปแบบในตัวอย่างข้างล่างนี้
// โดยที่จะต้องใช้ nested loop ในการแสดงผลลัพธ์ในข้อนี้เท่านั้น
// *  
// * *  
// * * *  
// * * * *  
// * * * * *
const printTriangle = (rows)=> {
    let answer = "";
    for (let i = 1; i <= rows; i++) {
        let asterisks = "";
        for (let j = 1; j <= i; j++) {
            asterisks += "* ";
        }
        answer += asterisks.trim() + "<br>";
    };
    return answer;
};
let ansEx6 = printTriangle(5);
document.getElementById("ansEx6").innerHTML = ansEx6;

// Exercise 7
// เขียนโปรแกรม JS เพื่อหาผลรวมของตัวเลขทั้งหมดตั้งแต่ 0 - 1000
// แต่ตัวเลขนั้นจะต้องหาร 3 หรือ 5 ลงตัวเท่านั้น
const findSum = ()=> {
    let sum = 0;
    for (let index = 0; index <= 1000; index++) {
        if ((index % 3 == 0) || (index % 5 == 0)) {
            sum += index;
        };
    };
    return sum;
};
let ansEx7 = `Result is: ${findSum()}`;
document.getElementById("ansEx7").innerHTML = ansEx7;

// Exercise 8
// เขียนโปรแกรม JS เพื่อใช้ในการหาค่าเฉลี่ยของคะแนนสอบ
// จากนักเรียนทั้งหมดที่กำหนดให้ในตาราง และจากนั้นให้ใช้คะแนนเฉลี่ย
// ที่คำนวณมาได้ ใช้ในการคำนวณเกรดต่อไป
// โดยที่เกรดจะต้องถูกคำนวณตามเงื่อนไขดังต่อไปนี้
// <60  F
// <70  D
// <80  C
// <90  B
// <100 A
const examResults = { David: 80, Vinoth: 77, Divya: 88, Ishitha: 95, Thomas: 68 };
const calGrade = (score)=> {
    if (!score || score > 100) {
        return "Invalid score";
    }
    else if (score < 60) {
        return 'F';
    } else if (score < 70) {
        return 'D';
    } else if (score < 80) {
        return 'C';
    } else if (score < 90) {
        return 'B';
    } else {
        return 'A';
    };
};
const getStudentGrades = (examResults)=> {
    const studentGrades = {};
    let examResultsKeys = Object.keys(examResults);
    for (let index = 0; index < examResultsKeys.length; index++) {
        let student = examResultsKeys[index];
        studentGrades[student] = calGrade(examResults[student]);
    }
    return studentGrades;
};
const formatResult = (studentGrades)=> {
    let formattedResult = "<ul>";
    for (let student in studentGrades) {
        formattedResult += `<li>${student}: ${studentGrades[student]}</li>`;
    }
    formattedResult += "</ul>";

    return formattedResult;
}
let ansEx8 = formatResult(getStudentGrades(examResults));
document.getElementById("ansEx8").innerHTML = ansEx8;
