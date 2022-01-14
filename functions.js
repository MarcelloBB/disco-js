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
        const RANDOM_INT = round(random() * coeficient);
        return RANDOM_INT;
    }
}
/* =========================================================*/

console.log(exp(10))