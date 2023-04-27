const arq = require("fs").readFileSync("/dev/stdin", "utf8")
const dados = arq.split("\n")

let linha = 0, casos = 1
while (true) {
  
  if (dados[linha] === "0 0") {
    break
  }
  
  const [ marmores, consultas ] = dados[linha].split(" ").map(valor => parseInt(valor))
  linha++

  let numerosMarmores = []
  for (let i = 0; i < marmores; i++) {
    numerosMarmores.push(parseInt(dados[linha]))
    linha++
  }
  numerosMarmores = numerosMarmores.sort((a, b) => a - b)
  
  console.log(`CASE# ${casos}:`)
  for (let i = 0; i < consultas; i++) {
    let numeroConsultado = parseInt(dados[linha])
    linha++

    let positionOfNumberConsulted = numerosMarmores.indexOf(numeroConsultado)

    if (positionOfNumberConsulted === -1) {
      console.log(`${numeroConsultado} not found`)
    } else {
      console.log(`${numeroConsultado} found at ${positionOfNumberConsulted + 1}`)
    }
  }

  casos++
}