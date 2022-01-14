/* =========================================================*/
const {  exp, pow, sqrt, random, round  } = Math;

const genRandomInt = (coeficient = 10) => {
    const RANDOM_INT = round(random() * coeficient);
    return RANDOM_INT;
}
/* =========================================================*/

console.log(exp(10))