#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//display a colourfull welcome message
console.log("=".repeat(60));
console.log(chalk.bold.cyanBright("\n \t\tCode with Ndoll7 - Word Counter"));
console.log("=".repeat(60));
//prompt the user enter a sentence
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a Sentence",
    }
]);
//triming the sentence and splitting it into words based on "spaces"
let words = answers.sentence.trim().split(" ");
//analiysis the user input sentences
console.log("=".repeat(60));
console.log(chalk.bold("-Sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(60));
