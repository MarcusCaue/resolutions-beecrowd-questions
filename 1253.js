const arq = require("fs").readFileSync("/dev/stdin", "utf8")
const dados = arq.split("\n")

let linha = 0
let quantCasosTeste = parseInt(dados[linha])
linha++

for (let i = 0; i < quantCasosTeste; i++) {
  let sentencaCodificada = dados[linha].trim()
  linha++

  let steps = parseInt(dados[linha].trim())
  linha++

  // ASCII Codes: "A" => 65; "Z" => 90

  let sentencaOriginal = sentencaCodificada.split("").map(char => {
    let asciiCode = char.charCodeAt(0)

    for (let j = 0; j < steps; j++) {
      asciiCode--
      if (asciiCode === 64) {
        asciiCode = 90
      }
    }

    return String.fromCodePoint(asciiCode)
  }).join("")

  console.log(sentencaOriginal)
}