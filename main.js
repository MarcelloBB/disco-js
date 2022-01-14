// *******************************************************
// 3º party modules
// *******************************************************
const program   = require("commander");
const package   = require("./package.json");

// *******************************************************
// Disco modules
// *******************************************************
const constants = require("./constants");
const actions   = require("./actions");
const functions = require("./functions");

// Add version
program.version(package.version);


program 
    .command("sum <a> <b>")   
    .description("Sum two numbers")
    .action((a, b) => {
        actions.sumAction(a, b);
    })

program 
    .command("minus <a> <b>")   
    .description("Subtract two numbers")
    .action((a, b) => {
        actions.minusAction(a, b);
    })

program 
    .command("times <a> <b>")   
    .description("Multiply two numbers")
    .action((a, b) => {
        actions.timesAction(a, b);
    })

program 
    .command("div <a> <b>")   
    .description("Divide two numbers")
    .action((a, b) => {
        actions.divAction(a, b);
    })

program 
    .command("idiv <a> <b>")   
    .description("Int division of two numbers")
    .action((a, b) => {
        actions.idivAction(a, b);
    })

program 
    .command("fac <a>")   
    .description("Factorial of a integer")
    .action((a) => {
        actions.facAction(a);
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
        console.log(constants.PI);
    })

program 
    .command("e")   
    .description("E constant")
    .action(() => {
        console.log(constants.E);
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