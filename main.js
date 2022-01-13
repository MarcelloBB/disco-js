#!/usr/bin/env node
// Import packages
const program = require("commander");
const package = require("./package.json");
const Table = require("cli-table");

function showTable() {
    const table = new Table({head: ["Command", "Description"]});
    table.push(
        ["log", "Show a underrated message"],
        ["add", "Do nothing"]
    );

    console.log(table.toString());
}

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

program
    .command("tabletest")
    .description("Show table tests")
    .action(() => {
        showTable();
    })
// Node need this to understand commands
program.parse(process.argv);