// A lógica de resolução está correta, porém ele não resolve a questão por exceder o tempo limite

const arq = require("fs").readFileSync(__dirname + "/stdin", "utf8")
const dados = arq.split("\n")

let linha = 0
while (true) {
  if (dados[linha] === undefined)
    break

  let quantCasosTeste = parseInt(dados[linha])
  linha += 2 // Pulando a linha em branco
   
  let i
  for (i = 0; i < quantCasosTeste; i++) {
    
    let especies = new Set()
    let arvores = []

    while (true) {
      if (dados[linha] === "\r" || dados[linha] === undefined)
        break
      
      arvores.push(dados[linha])
      especies.add(dados[linha])
      linha++
    }

    let especiePopulacao = new Map()
    especies.forEach(especie => {
      let populacao = arvores.filter(arvore => arvore === especie).length
      especiePopulacao.set(especie, populacao)
    })

    let totalArvores = arvores.length

    let especiesOrdenadas = Array(...especies).sort()
    especiesOrdenadas.forEach(especie => {
      console.log(`${especie} ${(especiePopulacao.get(especie) / totalArvores * 100).toFixed(4)}`)
    })

    if (i !== quantCasosTeste - 1)
      console.log("")
    linha++

  }
}
