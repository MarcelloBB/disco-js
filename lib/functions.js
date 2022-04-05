// DISCO-JS
// MARCELLO B.

function genRandomInt(coeficient = 10)
{
   const RANDOM_INT = Math.round(Math.random() * coeficient);
   return RANDOM_INT;
}

function goFactorial(number)
{
        let rval = 1;
    
        for (let i = 2; i <= number; i++) {
            rval = rval * i;
        }
    
        return rval;
}

// exporting
module.exports = {
    // math
    round:  Math.round(),
    exp:    Math.exp(),
    pow:    Math.pow(),
    sqrt:   Math.sqrt(),
    random: Math.random(),

    // other
    genRandomInt,
    goFactorial
}
