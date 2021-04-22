#!/usr/bin/env node

// "Requires" for the packages 
const chalk = require("chalk");
const gradient = require('gradient-string');
const boxen = require("boxen");


// Variables

const log = console.log;
const newLine = "\n";
const gold = chalk.keyword('gold');
const khaki = chalk.keyword('khaki');


// Card

const data = {
    name: chalk.white("Natascha Gritte"),
    alias: chalk.cyan("Nana"),
    description: chalk.white("Studied ") + chalk.keyword("firebrick")("Chinese ") + chalk.white("Language and Literature") + '. ' + chalk.white("Currently in retraining as a ") + chalk.bold(gradient.rainbow("Web dev junior")) + '.',
    github: chalk.gray("https://github.com/Dhaibuna/ ") + khaki("Dhaibuna"),
    linkedIn: chalk.gray("www.linkedin.com/in/ngritte/ ") + khaki("Natascha Gritte"),
    comingSoon: gradient.rainbow("I've a certain talent to waste my time on really useful and pertinent stuff ... that's why, one day, you will get an ASCII art instead of this sentence. Voilà."),

    labelGitHub: khaki("GitHub:"),
    labelLinkedIn: khaki("LinkedIn:"),
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
                `${data.labelLinkedIn} ${data.linkedIn}`,
                newLine,
                `${data.comingSoon}`,
            ].join(newLine),
            {
                padding: 1,
                margin: 1,
                borderStyle: "singleDouble",
            },
        )
    )
)