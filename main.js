// DISCO-JS
// MARCELLO B.

// Requires `commander` 
const program   = require("commander");

// Load version from json
const package   = require("./package.json");

// Disco modules
const constants = require("./lib/constants");
const actions   = require("./lib/actions");
const functions = require("./lib/functions");

// Add version
program.version(package.version);

// Sum
program 
    .command("sum <a> <b>")   
    .description("Sum two numbers")
    .action((a, b) => {
        actions.sumAction(a, b);
    })

// Minus
program 
    .command("minus <a> <b>")   
    .description("Subtract two numbers")
    .action((a, b) => {
        actions.minusAction(a, b);
    })

// Times
program 
    .command("times <a> <b>")   
    .description("Multiply two numbers")
    .action((a, b) => {
        actions.timesAction(a, b);
    })

// Div
program 
    .command("div <a> <b>")   
    .description("Divide two numbers")
    .action((a, b) => {
        actions.divAction(a, b);
    })

// Idiv
program 
    .command("idiv <a> <b>")   
    .description("Int division of two numbers")
    .action((a, b) => {
        actions.idivAction(a, b);
    })

// Factorial
program 
    .command("fac <a>")   
    .description("Factorial of a integer")
    .action((a) => {
        actions.facAction(a);
    })

// Iran - Random integer
program 
    .command("iran")   
    .description("Random integer")
    .action(() => {
        actions.iranAction();
    })

// Ran - Random float
program 
    .command("ran")   
    .description("Random number (float)")
    .action((coef) => {
        actions.ranAction();
    })

// Pi const
program 
    .command("pi")   
    .description("PI constant")
    .action(() => {
        console.log(constants.PI);
    })

// E const
program 
    .command("e")   
    .description("E constant")
    .action(() => {
        console.log(constants.E);
    })

// Round
program 
    .command("round <a>")   
    .description("Round [a]")
    .action((a) => {
        actions.roundAction(a);
    })

// Sqrt
program 
    .command("sqrt <a>")   
    .description("Square root of [a]")
    .action((a) => {
        actions.sqrtAction(a);
    })

// Pow
program 
    .command("pow <a> <b>")   
    .description("Pow of base [a] and exp [b]")
    .action((a, b) => {
        actions.powAction(a, b);
    })

// Node need this to understand commands
program.parse(process.argv);
