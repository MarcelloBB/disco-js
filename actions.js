const functions = require("./functions");

const sumAction = (a, b) => {
    console.log(``);
    console.log(`╔═══════════════════════════╗`);
    console.log(`║         Disco-js          ║`);
    console.log(`╚════════╦════════╦═════════╝`);
    console.log(`         ║  v1.0  ║          `);
    console.log(`         ╚════════╝`);
    console.log(``);
    console.log(` ▓ OPERATION:`);
    console.log(`   [+] SUM`);
    console.log(``);
    console.log(` ▓ RESULTS:`);
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
    console.log(` ▓ OPERATION:`);
    console.log(`   [-] MINUS`);
    console.log(``);
    console.log(` ▓ RESULTS:`);
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
    console.log(` ▓ OPERATION:`);
    console.log(`   [x] TIMES`);
    console.log(``);
    console.log(` ▓ RESULTS:`);
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
    console.log(` ▓ OPERATION:`);
    console.log(`   [/] DIVISION`);
    console.log(``);
    console.log(` ▓ RESULTS:`);
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
    console.log(` ▓ OPERATION:`);
    console.log(`   [/] INT DIVISION`);
    console.log(``);
    console.log(` ▓ RESULTS:`);
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
    console.log(` ▓ OPERATION:`);
    console.log(`   [***] FACTORIAL`);
    console.log(``);
    console.log(` ▓ RESULTS:`);
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
    console.log(` ▓ OPERATION:`);
    console.log(`   [*] RANDOM INTEGER`);
    console.log(``);
    console.log(` ▓ RESULTS:`);
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
    console.log(` ▓ OPERATION:`);
    console.log(`   [*] RANDOM FLOAT`);
    console.log(``);
    console.log(` ▓ RESULTS:`);
    console.log(`   ${Math.random()}`);
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
    ranAction:    ranAction
}