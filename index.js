#!/usr/bin/env node 

// "Requires" for the packages 
const chalk = require("chalk");
const boxen = require("boxen");


// Variables

const log = console.log ;
const newLine = "\n";


// Card

const data = {
    name: chalk.white("Natascha Gritte"),
    alias: chalk.cyan("Nana"),
    description: chalk.white("Studied ") + chalk.red("Chinese ") + chalk.white("Language and Literature") + '. ' + chalk.white("Currently in retraining as a ") + chalk.bold.magenta("web dev junior")
};

log(
    `${data.name} / ${data.alias} prefered`,
    newLine, 
    `${data.description}`, 
)