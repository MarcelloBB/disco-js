#!/usr/bin/env node
// Import packages
const program = require("commander");
const package = require("./package.json");

// Add version
program.version(package.version);

// Add first CLI program
//          * add [todo]
//          We use command() and then we give a string and the parameters
// [] = optional
// <> = required
//          We use description() to give --help flag text

program
    .command("add [todo]")
    .description("Adiciona uma tarefa")
    .action((todo) => {
        console.log(todo);
    });

// Node need this to understand commands
program.parse(process.argv);