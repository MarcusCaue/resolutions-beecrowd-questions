const arq = require("fs").readFileSync("/dev/stdin", "utf8")
const [ quantVoltas, quantPlacas ] = arq.split(" ").map(valor => parseInt(valor))

const totalPlacas = quantPlacas * quantVoltas // 100%

let placasPorcentagens = ""
for (let i = 10; i < 91; i += 10) {
  let placaPercentual = Math.ceil(totalPlacas * (i / 100))
  placasPorcentagens += placaPercentual + " "
}

console.log(placasPorcentagens.trim())