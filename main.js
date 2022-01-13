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
    .command("add <task>")
    .description("Add a task")
    .action((task) => {
        console.log(`[💡] Disco added [${task}]`);
    });

program
    .command("log <task>")
    .description("Show task detail")
    .action((task) => {
        console.log(`[⏳] Task [${task}] is not finished yet`);
    });

    
// Node need this to understand commands
program.parse(process.argv);