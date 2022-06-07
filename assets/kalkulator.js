// var firstname = "Harry";
// console.log(firstname);

// firstname = "Ron";
// console.log(firstname);

// let user = {
//     name: {

//         first : "Harry",
//         last : "Potter",

//     },
//     age: 20,
//     isMuggle: false,
//     stuff: ["Magic Wind", "Flying Car", "Owl"]
// };

// console.log("Hallo, nama saya " + user.name.first + " " + user.name.last);
// console.log("Umur saya " + user.age + " tahun");


// IF Sederhana
// let x = 50;

// if(x > 70){
//     console.log(x);
// }
// else{
//     console.log("Nilai kurang dari 70");
// }

// IF ELSE
// let language = "French";
// let greeting = "Selamat Pagi!";

// if(language === "English") {
//     greeting = "Good Morning!";
// } else if(language === "French") {
//     greeting = "Bonjour!"
// } else if(language === "Japanese") {
//     greeting = "Ohayogozaimasu!"
// }

// console.log(greeting);

// For Loop
// const myArray = ["Harry", "Ron", "Hermione", "Tom"];

// for (let i = 0; i < myArray.length; i++){
//     console.log(myArray[i]);
// }

// For Each
// let myArray = ["Harry", "Ron", "Hermione", "Tom"];

// for (const arrayItem of myArray){
//     console.log(arrayItem)
// }

//Function

// Func 1
// function greeting(name, language) {
//     if(language === "English") {
//         console.log("Good Morning " + name + "!");
//     } else if (language === "French") {
//         console.log("Bonjour " + name + "!");
//     } else {
//         console.log("Selamat Pagi " + name + "!");
//     }
// }

// greeting("Harry", "French");

// Func 2
// function multiply(a, b) {
//     return a * b;
// }

// let result = multiply(10, 2)
// console.log(result)

//Func 3
// function greeting(name, language) {
//     if(language === "English") {
//         return "Good Morning " + name + "!";
//     } else if (language === "French") {
//         return "Bonjour " + name + "!";
//     } else {
//         return "Selamat Pagi " + name + "!";
//     }
// }

// let greetingMessage = greeting("Harry", "French");
// console.log(greetingMessage);

// const firstName = prompt("Siapa nama depanmu?");
// const lastName = prompt("Siapa nama belakangmu?");
// const language = prompt("Bisa berbahasa apa?");
 
// const user = {
//    name: {
//        first: firstName,
//        last: lastName,
//    },
//    language: language
// };
 
// if (user.language === "English") {
//    alert("Nice to meet you " + user.name.first + " " + user.name.last + "!");
// } else if (user.language === "French") {
//    alert("Ravi de vous rencontrer " + user.name.first + " " + user.name.last + "!");
// } else if (user.language === "Japanese") {
//    alert("Hajimemashite, " + user.name.first + " " + user.name.last + "!");
// } else {
//    alert("Senang bertemu dengan Anda " + user.name.first + " " + user.name.last + "!");
// }

// console.log("Selamat Anda berhasil menggunakan JavaScript pada Website")

const calculator = {
    displayNumber: '0',
    operator: null,
    firstNumber: null,
    waitingForSecondNumber: false
 };
 
 function updateDisplay() {
    document.querySelector("#displayNumber").innerText = calculator.displayNumber;
 }
 
 function clearCalculator() {
    calculator.displayNumber = '0';
    calculator.operator = null;
    calculator.firstNumber = null;
    calculator.waitingForSecondNumber = false;
 }
 
 function inputDigit(digit) {
    if (calculator.displayNumber === '0') {
        calculator.displayNumber = digit;
    } else {
        calculator.displayNumber += digit;
    }
 }
 
 function inverseNumber() {
    if (calculator.displayNumber === '0') {
        return;
    }
    calculator.displayNumber = calculator.displayNumber * -1;
 }

//  function comma() {
//      if (calculator.displayNumber === '0'){
//          return;
//      }
//      calculator.displayNumber = calculator.displayNumber;
//  }
 
 function handleOperator(operator) {
    if (!calculator.waitingForSecondNumber) {
        calculator.operator = operator;
        calculator.waitingForSecondNumber = true;
        calculator.firstNumber = calculator.displayNumber;
        calculator.displayNumber = '0';
    } else {
        alert('Operation is defined')
    }
 }
 
 function performCalculation() {
    if (calculator.firstNumber == null || calculator.operator == null) {
        alert("Define operation first!");
        return;
    }
 
    let result = 0;
    if (calculator.operator === "+") {
        result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
    } else if (calculator.operator === "x"){
        result = parseInt(calculator.firstNumber) * parseInt(calculator.displayNumber);
    }
    else if (calculator.operator === ":"){
        result = parseInt(calculator.firstNumber) / parseInt(calculator.displayNumber);
    }
    else if (calculator.operator === "%"){
        result = parseInt(calculator.firstNumber) % parseInt(calculator.displayNumber);
    }
    else {
        result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber)
    }
 
    calculator.displayNumber = result;
 }
 
 
 const buttons = document.querySelectorAll(".button");
 for (let button of buttons) {
    button.addEventListener('click', function (event) {
 
        const target = event.target;
 
        if (target.classList.contains('clear')) {
            clearCalculator();
            updateDisplay();
            return;
        }
 
        if (target.classList.contains('negative')) {
            inverseNumber();
            updateDisplay();
            return;
        }
 
        if (target.classList.contains('equals')) {
            performCalculation();
            updateDisplay();
            return;
        }
 
        if (target.classList.contains('operator')) {
            handleOperator(target.innerText)
            return;
        }
        if (target.classList.contains('comma')){
            comma(target.innerText)
            return;
        }
 
        inputDigit(target.innerText);
        updateDisplay()
    });
 }