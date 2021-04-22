#!/usr/bin/env node

// "Requires" for the packages 
const chalk = require("chalk");
const gradient = require('gradient-string');
const boxen = require("boxen");


// Variables

const log = console.log;
const newLine = "\n";
const gold = chalk.keyword('gold');
const paleGold = chalk.keyword('khaki');


// Card

const data = {
    name: chalk.white("Natascha Gritte"),
    alias: chalk.cyan("Nana"),
    description: chalk.white("Studied ") + chalk.red.bold("Chinese ") + chalk.white("Language and Literature") + '. ' + chalk.white("Currently in retraining as a ") + gradient.rainbow("Web dev junior") + '.',
    github: chalk.gray("https://github.com/Dhaibuna/ ") + paleGold("Dhaibuna"),
    linkedIn: chalk.gray("www.linkedin.com/in/ngritte/ ") + paleGold("Natascha Gritte"),

    labelGitHub: paleGold("GitHub:"),
    labelLinkedIn: paleGold("LinkedIn:"),
};

log(
    gold(
        boxen(
            [
                `${data.name} / ${data.alias}`,
                newLine,
                `${data.description}`,
                newLine,
                `${data.labelGitHub} ${data.github}`,
                `${data.labelLinkedIn} ${data.linkedIn}`
            ].join(newLine),
            {
                padding: 1,
                margin: 1,
                borderStyle: "singleDouble",
            },
        )
    )
)