import inquirer from "inquirer";
import chalk from "chalk";
const answers = await inquirer.prompt({
    name: "sentence",
    type: "input",
    message: `${chalk.cyan.bold("Enter your sentence to count words: ")}`
});
const words = answers.sentence.trim().split(" ");
console.log(words);
console.log(`${chalk.yellowBright.italic(`Your sentence has ${words.length} words.`)}`);
