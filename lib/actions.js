// DISCO-JS
// MARCELLO B.

const functions = require("./functions");
const colors    = require("colors");

function renderHeader()
{
    console.log(``);
    console.log(`╔═══════════════════════════╗`);
    console.log(`║         Disco-js          ║`);
    console.log(`╚════════╦════════╦═════════╝`);
    console.log(`         ║  v1.0  ║          `);
    console.log(`         ╚════════╝`);
    console.log(``);
}

function renderOperation(operationId, operationName)
{
    console.log(` ▓ OPERATION:`.black.bgYellow);
    console.log(`   [${operationId}] ${operationName}`);   
}

const sumAction = (a, b) => {
    renderHeader();
    renderOperation("+", "SUM");
    console.log(``);
    console.log(` ▓ RESULTS: `.black.bgCyan);
    console.log(`   ${a} + ${b} = ${parseFloat(a) + parseFloat(b)}`);
    console.log(``);
}

const minusAction = (a, b) => {
    renderHeader();
    renderOperation("-", "MINUS");
    console.log(``);
    console.log(` ▓ RESULTS: `.black.bgCyan);
    console.log(`   ${a} - ${b} = ${parseFloat(a) - parseFloat(b)}`);
    console.log(``);
}

const timesAction = (a, b) => {
    renderHeader();
    renderOperation("X", "TIMES");
    console.log(``);
    console.log(` ▓ RESULTS: `.black.bgCyan);
    console.log(`   ${a} x ${b} = ${parseFloat(a) * parseFloat(b)}`);
    console.log(``);
}

const divAction = (a, b) => {
    renderHeader();
    renderOperation("/", "DIVISION");
    console.log(``);
    console.log(` ▓ RESULTS: `.black.bgCyan);
    console.log(`   ${a} / ${b} = ${parseFloat(a) / parseFloat(b)}`);
    console.log(``);
}

const idivAction = (a, b) => {
    renderHeader();
    renderOperation("/", "INT DIVISION");
    console.log(``);
    console.log(` ▓ RESULTS: `.black.bgCyan);
    console.log(`   ${a} / ${b} = ${Math.round(parseFloat(a) / parseFloat(b))}`);
    console.log(``);
}

const facAction = (a) => {
    renderHeader();
    renderOperation("***", "FACTORIAL");
    console.log(``);
    console.log(` ▓ RESULTS: `.black.bgCyan);
    console.log(`   ${a}! = ${functions.goFactorial(parseInt(a))}`);
    console.log(``);
}

const iranAction = () => {
    renderHeader();
    renderOperation("*", "INT RANDOM");
    console.log(``);
    console.log(` ▓ RESULTS: `.black.bgCyan);
    console.log(`   ${functions.genRandomInt()}`);
    console.log(``);
}

const ranAction = () => {
    renderHeader();
    renderOperation("*", "FLOAT RANDOM");
    console.log(``);
    console.log(` ▓ RESULTS: `.black.bgCyan);
    console.log(`   ${Math.random()}`);
    console.log(``);
}

const roundAction = (a) => {
    renderHeader();
    renderOperation("*", "ROUND");
    console.log(``);
    console.log(` ▓ RESULTS: `.black.bgCyan);
    console.log(`   ${Math.round(a)}`);
    console.log(``);
}

const sqrtAction = (a) => {
    renderHeader();
    renderOperation("*", "SQRT");
    console.log(``);
    console.log(` ▓ RESULTS: `.black.bgCyan);
    console.log(`   _/${a} = ${Math.sqrt(a)}`);
    console.log(``);
}

const powAction = (a, b) => {
    renderHeader();
    renderOperation("^", "POW");
    console.log(``);
    console.log(` ▓ RESULTS: `.black.bgCyan);
    console.log(`   ${a} ^ ${b} = ${Math.pow(parseFloat(a), parseFloat(b))}`);
    console.log(``);
}

// exporting
module.exports = {
    sumAction,
    minusAction,
    timesAction,
    divAction,
    idivAction,
    facAction,
    iranAction,
    ranAction,
    roundAction,
    sqrtAction,
    powAction
}
