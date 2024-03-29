#! /usr/bin/env node
import inquirer from "inquirer";
// computer will genarate a number.
// user give input by guessing number.
// have to compire both num togather and show num.
const randumNumber = Math.floor(Math.random() * 7 + 1);
// console.log(randumNumber)
const answer = await inquirer.prompt([
    {
        name:"userNumber",
        type:"number",
        message:"Please guess the number from 1 to 7",
    }
])
if(answer.userNumber === randumNumber){
console.log("Congtratulation! you guessed a true number")
}else{
console.log("Sorry you guessed a false number")
}