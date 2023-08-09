/**
 * Serão DUAS PROVAS, e para quem APENAS fizer as provas, a nota final será dada pela MÉDIA ARITMÉTICA das notas das duas provas. 
 * 
 * Quem fizer um TRABALHO vai ter a TERCEIRA NOTA como ADICIONAL, e, daí, a nota final será a MÉDIA DAS TRÊS NOTAS. 
 * 
 * Se o estudante achar que alguma destas 3 notas foi baixa, pode ainda fazer uma QUARTA PROVA SUBSTUTIVA para a nota MAIS BAIXA (desde que tenha feito o trabalho). Obviamente, se a nota da prova substitutiva for a mais baixa, o professor Adrien irá desconsiderá-la. 
 * 
 * Se algum estudante fizer apenas UMA AVALIAÇÃO, será considerado 0 para a sua segunda nota. 
 *
*/

const input = require("fs").readFileSync("./dev/stdin", "utf8")
const lines = input.split("\n")

let indexLine = 0

const qAlunos = parseInt(lines[indexLine])
indexLine++

// console.log(lines)

for (let i = 0; i < qAlunos; i++) {
   const nomeAluno = lines[indexLine]
   indexLine++

   const notas: number[] = lines[indexLine].split(" ").map((nota: string) => parseFloat(nota))
   indexLine++

   let output = `${nomeAluno}: `
   let calculo

   switch (notas.length) {
      case 1:
         calculo = notas[0] / 2
         break
      
      case 2:
         calculo = (notas[0] + notas[1]) / 2
         break
      
      case 3:
         calculo = (notas[0] + notas[1] + notas[2]) / 3
         break
      
      default:
         let menor = menorNota(notas)
         let quartaNota = notas[3]

         if (quartaNota > menor) {
            notas[notas.indexOf(menor)] = quartaNota
         }

         calculo = (notas[0] + notas[1] + notas[2]) / 3
         break
   }

   output += `${calculo.toFixed(1)}`
   console.log(output)
}

function menorNota(notas: number[]) {
   let menor = notas[0]
   notas.slice(1).forEach(nota => {
      if (nota < menor) {
         menor = nota
      }
   })

   return menor
}