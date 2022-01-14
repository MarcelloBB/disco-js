const functions = require("./functions");
const colors    = require("colors");

const sumAction = (a, b) => {
    console.log(``);
    console.log(`╔═══════════════════════════╗`);
    console.log(`║         Disco-js          ║`);
    console.log(`╚════════╦════════╦═════════╝`);
    console.log(`         ║  v1.0  ║          `);
    console.log(`         ╚════════╝`);
    console.log(``);
    console.log(` ▓ OPERATION:`.black.bgYellow);
    console.log(`   [+] SUM`);
    console.log(``);
    console.log(` ▓ RESULTS: `.black.bgCyan);
    console.log(`   ${a} + ${b} = ${parseFloat(a) + parseFloat(b)}`);
    console.log(``);
}

const minusAction = (a, b) => {
    console.log(``);
    console.log(`╔═══════════════════════════╗`);
    console.log(`║         Disco-js          ║`);
    console.log(`╚════════╦════════╦═════════╝`);
    console.log(`         ║  v1.0  ║          `);
    console.log(`         ╚════════╝`);
    console.log(``);
    console.log(` ▓ OPERATION: `.black.bgYellow);
    console.log(`   [-] MINUS`);
    console.log(``);
    console.log(` ▓ RESULTS: `.black.bgCyan);
    console.log(`   ${a} - ${b} = ${parseFloat(a) - parseFloat(b)}`);
    console.log(``);
}

const timesAction = (a, b) => {
    console.log(``);
    console.log(`╔═══════════════════════════╗`);
    console.log(`║         Disco-js          ║`);
    console.log(`╚════════╦════════╦═════════╝`);
    console.log(`         ║  v1.0  ║          `);
    console.log(`         ╚════════╝`);
    console.log(``);
    console.log(` ▓ OPERATION: `.black.bgYellow);
    console.log(`   [x] TIMES`);
    console.log(``);
    console.log(` ▓ RESULTS: `.black.bgCyan);
    console.log(`   ${a} x ${b} = ${parseFloat(a) * parseFloat(b)}`);
    console.log(``);
}

const divAction = (a, b) => {
    console.log(``);
    console.log(`╔═══════════════════════════╗`);
    console.log(`║         Disco-js          ║`);
    console.log(`╚════════╦════════╦═════════╝`);
    console.log(`         ║  v1.0  ║          `);
    console.log(`         ╚════════╝`);
    console.log(``);
    console.log(` ▓ OPERATION: `.black.bgYellow);
    console.log(`   [/] DIVISION`);
    console.log(``);
    console.log(` ▓ RESULTS: `.black.bgCyan);
    console.log(`   ${a} / ${b} = ${parseFloat(a) / parseFloat(b)}`);
    console.log(``);
}

const idivAction = (a, b) => {
    console.log(``);
    console.log(`╔═══════════════════════════╗`);
    console.log(`║         Disco-js          ║`);
    console.log(`╚════════╦════════╦═════════╝`);
    console.log(`         ║  v1.0  ║          `);
    console.log(`         ╚════════╝`);
    console.log(``);
    console.log(` ▓ OPERATION: `.black.bgYellow);
    console.log(`   [/] INT DIVISION`);
    console.log(``);
    console.log(` ▓ RESULTS: `.black.bgCyan);
    console.log(`   ${a} / ${b} = ${Math.round(parseFloat(a) / parseFloat(b))}`);
    console.log(``);
}

const facAction = (a) => {
    console.log(``);
    console.log(`╔═══════════════════════════╗`);
    console.log(`║         Disco-js          ║`);
    console.log(`╚════════╦════════╦═════════╝`);
    console.log(`         ║  v1.0  ║          `);
    console.log(`         ╚════════╝`);
    console.log(``);
    console.log(` ▓ OPERATION: `.black.bgYellow);
    console.log(`   [***] FACTORIAL`);
    console.log(``);
    console.log(` ▓ RESULTS: `.black.bgCyan);
    console.log(`   ${a}! = ${functions.goFactorial(parseInt(a))}`);
    console.log(``);
}

const iranAction = () => {
    console.log(``);
    console.log(`╔═══════════════════════════╗`);
    console.log(`║         Disco-js          ║`);
    console.log(`╚════════╦════════╦═════════╝`);
    console.log(`         ║  v1.0  ║          `);
    console.log(`         ╚════════╝`);
    console.log(``);
    console.log(` ▓ OPERATION: `.black.bgYellow);
    console.log(`   [*] RANDOM INTEGER`);
    console.log(``);
    console.log(` ▓ RESULTS: `.black.bgCyan);
    console.log(`   ${functions.genRandomInt()}`);
    console.log(``);
}

const ranAction = () => {
    console.log(``);
    console.log(`╔═══════════════════════════╗`);
    console.log(`║         Disco-js          ║`);
    console.log(`╚════════╦════════╦═════════╝`);
    console.log(`         ║  v1.0  ║          `);
    console.log(`         ╚════════╝`);
    console.log(``);
    console.log(` ▓ OPERATION: `.black.bgYellow);
    console.log(`   [*] RANDOM FLOAT`);
    console.log(``);
    console.log(` ▓ RESULTS: `.black.bgCyan);
    console.log(`   ${Math.random()}`);
    console.log(``);
}

const roundAction = (a) => {
    console.log(``);
    console.log(`╔═══════════════════════════╗`);
    console.log(`║         Disco-js          ║`);
    console.log(`╚════════╦════════╦═════════╝`);
    console.log(`         ║  v1.0  ║          `);
    console.log(`         ╚════════╝`);
    console.log(``);
    console.log(` ▓ OPERATION: `.black.bgYellow);
    console.log(`   [*] ROUND`);
    console.log(``);
    console.log(` ▓ RESULTS: `.black.bgCyan);
    console.log(`   ${Math.round(a)}`);
    console.log(``);
}

const sqrtAction = (a) => {
    console.log(``);
    console.log(`╔═══════════════════════════╗`);
    console.log(`║         Disco-js          ║`);
    console.log(`╚════════╦════════╦═════════╝`);
    console.log(`         ║  v1.0  ║          `);
    console.log(`         ╚════════╝`);
    console.log(``);
    console.log(` ▓ OPERATION: `.black.bgYellow);
    console.log(`   [*] SQUARE ROOT`);
    console.log(``);
    console.log(` ▓ RESULTS: `.black.bgCyan);
    console.log(`   _/${a} = ${Math.sqrt(a)}`);
    console.log(``);
}

const powAction = (a, b) => {
    console.log(``);
    console.log(`╔═══════════════════════════╗`);
    console.log(`║         Disco-js          ║`);
    console.log(`╚════════╦════════╦═════════╝`);
    console.log(`         ║  v1.0  ║          `);
    console.log(`         ╚════════╝`);
    console.log(``);
    console.log(` ▓ OPERATION: `.black.bgYellow);
    console.log(`   [^] POWER`);
    console.log(``);
    console.log(` ▓ RESULTS: `.black.bgCyan);
    console.log(`   ${a} ^ ${b} = ${Math.pow(parseFloat(a), parseFloat(b))}`);
    console.log(``);
}

module.exports = {
    sumAction:    sumAction,
    minusAction:  minusAction,
    timesAction:  timesAction,
    divAction:    divAction,
    idivAction:   idivAction,
    facAction:    facAction,
    iranAction:   iranAction,
    ranAction:    ranAction,
    roundAction:  roundAction,
    sqrtAction:   sqrtAction,
    powAction:    powAction
}