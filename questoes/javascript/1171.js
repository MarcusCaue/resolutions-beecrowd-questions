const arq = require("fs").readFileSync(__dirname + "/stdin", "utf8")
const dados = arq.split("\n")

let quantCasosTeste = parseInt(dados[0])

const quantNumbers = new Map()
let n 
for (let i = 1; i < quantCasosTeste+1; i++) {
  n = parseInt(dados[i])
  quantNumbers.has(n) ? quantNumbers.set(n, quantNumbers.get(n) + 1) : quantNumbers.set(n, 1)
}

const chavesOrdenadas = Array(...quantNumbers.keys()).sort((a, b) => a - b)

chavesOrdenadas.forEach(key => {
  console.log(`${key} aparece ${quantNumbers.get(key)} vez (es)`)
})