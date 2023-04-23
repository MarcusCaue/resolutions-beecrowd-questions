const arq = require("fs").readFileSync('/dev/stdin', 'utf8');
const [ n1, n2, n3 ] = arq.split(" ").map(valor => parseInt(valor.trim()))

const maiorAB = (a, b) => ((a + b + Math.abs(a - b)) / 2)
const maiorValor = maiorAB(n3, maiorAB(n1, n2))

console.log(`${maiorValor} eh o maior`);