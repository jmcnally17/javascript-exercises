const fizzbuzz = require("../conditionals/fizzbuzz")

const fizzbuzzUntil = (a) => {
  for (let i = 1; i <= a; i++) {
    console.log(fizzbuzz(i));
  }
}

module.exports = fizzbuzzUntil;