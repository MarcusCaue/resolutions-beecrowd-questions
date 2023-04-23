const arq = require("fs").readFileSync('/dev/stdin', 'utf8');
const [n1, n2] = arq.split("\n").map(valor => parseInt(valor.trim()));

console.log(`PROD = ${n1 * n2}`);