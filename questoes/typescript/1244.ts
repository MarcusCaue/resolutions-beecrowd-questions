const input = require("fs").readFileSync("/dev/stdin", "utf8")
const lines: string[] = input.split("\n")

let indexLine = 0
const qCasosTeste = parseInt(lines[indexLine++])

for (let i = 0; i < qCasosTeste; i++) {
  const words = lines[indexLine++].replace("\r", "").split(" ")
  words.sort((a, b) => b.length - a.length)
  console.log(words.join(" "));
}