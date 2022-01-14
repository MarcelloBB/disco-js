/* =========================================================*/

module.exports = {
    // *******************************************************
    // [Math]  functions
    // *******************************************************
    round:  Math.round(),
    exp:    Math.exp(),
    pow:    Math.pow(),
    sqrt:   Math.sqrt(),
    random: Math.random(),

    // *******************************************************  
    // Other  functions
    // *******************************************************
    genRandomInt: function (coeficient = 10) {
        const RANDOM_INT = Math.round(Math.random() * coeficient);
        return RANDOM_INT;
    },

    goFactorial: function (number) {
        let rval = 1;
        for (let i = 2; i <= number; i++) {
            rval = rval * i;
        }
        return rval;
    }
}
/* =========================================================*/