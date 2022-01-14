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
    .command("sum <a> <b>")   
    .description("Sum two numbers")
    .action((a, b) => {
        return (a + b);
    })

program 
    .command("minus <a> <b>")   
    .description("Subtract two numbers")
    .action((a, b) => {
        return (a - b);
    })

program 
    .command("times <a> <b>")   
    .description("Multiply two numbers")
    .action((a, b) => {
        return (a * b)
    })

program 
    .command("div <a> <b>")   
    .description("Divide two numbers")
    .action((a, b) => {
        return (a / b);
    })

program 
    .command("idiv <a> <b>")   
    .description("Int division of two numbers")
    .action((a, b) => {
        return (a / b);
    })

program 
    .command("fac <a>")   
    .description("Factorial of a integer")
    .action((a) => {
        return a;
    })

program 
    .command("iran [coef]")   
    .description("Random integer")
    .action(() => {
        return
    })

program 
    .command("ran [coef]")   
    .description("Sum two numbers")
    .action((coef) => {
        return;
    })

program 
    .command("pi")   
    .description("PI constant")
    .action(() => {
        return;
    })

program 
    .command("e")   
    .description("E constant")
    .action(() => {
        return;
    })

program 
    .command("round <a>")   
    .description("Round [a]")
    .action((a) => {
        return;
    })

program 
    .command("sqrt <a>")   
    .description("Square root of [a]")
    .action((a) => {
        return;
    })

program 
    .command("pow <a> <b>")   
    .description("Pow of base [a] and exp [b]")
    .action((a, b) => {
        return;
    })
    
// Node need this to understand commands
program.parse(process.argv);