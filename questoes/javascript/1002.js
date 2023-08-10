const arq = require("fs").readFileSync('/dev/stdin', 'utf8');
const raio = parseFloat(arq.split("\r\n")[0]);

const area = 3.14159 * (raio * raio);

console.log(`A=${area.toFixed(4)}`);