const input = require("fs").readFileSync("./dev/stdin", "utf8")
const lines = input.split('\n');

var [ qAlunos, qLitrosVez, qMlAlunoAula ] = lines[0].split(" ").map((valor: string) => parseInt(valor))

var qLitrosFinal = qLitrosVez

var qAlunosBebem = (qLitrosFinal * 1000) / qMlAlunoAula

while (qAlunosBebem < qAlunos) {
   qLitrosFinal += qLitrosVez
   qAlunosBebem = (qLitrosFinal * 1000) / qMlAlunoAula
}

console.log(qLitrosFinal)