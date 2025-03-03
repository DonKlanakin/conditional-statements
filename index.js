// Exercise 1
const multiply = (x, y) => {
    return x * y;
};
let ansEx1_1 = `multiply(2,3): ${multiply(2, 3)}`;
let ansEx1_2 = `multiply(9,9): ${multiply(9, 9)}`;
let ansEx1_3 = `multiply(5,4): ${multiply(5, 4)}`;
document.getElementById("ansEx1_1").innerHTML = ansEx1_1;
document.getElementById("ansEx1_2").innerHTML = ansEx1_2;
document.getElementById("ansEx1_3").innerHTML = ansEx1_3;

// Exercise 2
const isShortsWeather = (temparature) => {
    return temparature >= 75 ? true : false;
};
let ansEx2_1 = `isShortsWeather(80): ${isShortsWeather(80)}`;
let ansEx2_2 = `isShortsWeather(40): ${isShortsWeather(40)}`;
let ansEx2_3 = `isShortsWeather(48): ${isShortsWeather(48)}`;
document.getElementById("ansEx2_1").innerHTML = ansEx2_1;
document.getElementById("ansEx2_2").innerHTML = ansEx2_2;
document.getElementById("ansEx2_3").innerHTML = ansEx2_3;

// Exercise 3
const lastElement = (ary) => {
    return ary.length <= 0 ? null : ary[ary.length - 1];
};
let ansEx3_1 = `lastElement([3,5,7]): ${lastElement([3, 5, 7])}`;
let ansEx3_2 = `lastElement([1]): ${lastElement([1])}`;
let ansEx3_3 = `lastElement([]): ${lastElement([])}`;
document.getElementById("ansEx3_1").innerHTML = ansEx3_1;
document.getElementById("ansEx3_2").innerHTML = ansEx3_2;
document.getElementById("ansEx3_3").innerHTML = ansEx3_3;

// Exercise 4
const capitalize = (str) => {
    return str[0].toUpperCase().concat(str.slice(1));
};
let ansEx4_1 = `capitalize("eggplant"): ${capitalize("eggplant")}`;
let ansEx4_2 = `capitalize("pamplemousse"): ${capitalize("pamplemousse")}`;
let ansEx4_3 = `capitalize("squid"): ${capitalize("squid")}`;
document.getElementById("ansEx4_1").innerHTML = ansEx4_1;
document.getElementById("ansEx4_2").innerHTML = ansEx4_2;
document.getElementById("ansEx4_3").innerHTML = ansEx4_3;

//Exercise 5
const sumArray = (aryNumbers) => {
    return aryNumbers.reduce((accumulator, current) => accumulator + current, 0);
};
let ansEx5_1 = `sumArray([1,2,3]): ${sumArray([1, 2, 3])}`;
let ansEx5_2 = `sumArray([2,2,2,2]): ${sumArray([2, 2, 2, 2])}`;
let ansEx5_3 = `sumArray([50,50,1]): ${sumArray([50, 50, 1])}`;
document.getElementById("ansEx5_1").innerHTML = ansEx5_1;
document.getElementById("ansEx5_2").innerHTML = ansEx5_2;
document.getElementById("ansEx5_3").innerHTML = ansEx5_3;

// Exercise 6
const returnDay = (day) => {
    if (!day) {
        return null;
    }

    switch (day) {
        case 1:
            return "Monday"
            break;
        case 2:
            return "Tuesday"
            break;
        case 3:
            return "Wednesday"
            break;
        case 4:
            return "Thursday"
            break;
        case 5:
            return "Friday"
            break;
        case 6:
            return "Saturday"
            break;
        case 7:
            return "Sunday"
            break;
        default:
            break;
    }
};
let ansEx6_1 = `returnDay(1): ${returnDay(1)}`;
let ansEx6_2 = `returnDay(7): ${returnDay(7)}`;
let ansEx6_3 = `returnDay(4): ${returnDay(4)}`;
let ansEx6_4 = `returnDay(0): ${returnDay(0)}`;
document.getElementById("ansEx6_1").innerHTML = ansEx6_1;
document.getElementById("ansEx6_2").innerHTML = ansEx6_2;
document.getElementById("ansEx6_3").innerHTML = ansEx6_3;
document.getElementById("ansEx6_4").innerHTML = ansEx6_4;