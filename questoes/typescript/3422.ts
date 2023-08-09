const input = require("fs").readFileSync("./dev/stdin", "utf8")
const lines = input.split('\n');

let indexLine = 0

const qRegistros = parseInt(lines[indexLine])
indexLine++

for (let i = 0; i < qRegistros; i++) {
   let [ tempo, periodo ] = lines[indexLine].split(" ")
   indexLine++

   tempo = parseInt(tempo)
   let periodoNumerico = periodo === "1T" ? 45 : 90

   if (periodoNumerico === 90) {
      tempo += 45
   }

   let tempoSumula = `${Math.floor(tempo / periodoNumerico) * periodoNumerico}`

   if (tempo > periodoNumerico) {
      tempoSumula += `+${tempo % periodoNumerico}`
   } else {
      tempoSumula = tempo
   }

   console.log(tempoSumula)
}
