/*let num1;
let num2;
let operator; */

 const num1 = parseInt(prompt("Enter a number: "));
 const operator = prompt("Choose: + - / * ");
 const num2 = parseInt(prompt("Enter another number: "));

let result;

if (operator == "+") {
    result = num1 + num2;

} else if (operator == "-"){
    result = num1 - num2;

} else if (operator == "*"){
    result = num1 * num2;

} else if (operator == "/"){
    result = num1 / num2;
} else {
    "Enter the right operator and try again!"
}

alert(result); 