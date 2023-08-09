/**
 * As frequenciasArray só assumem valores de 0 a 8 => se o valor for ultrapassado, reinicia
 * 
 * Um acorde é composto por um intervalo de teclas (a, b)
 * 
 * Deve-se buscar a nota mais frequente no acorde => se houver mais de uma, será emitida a de maior valor
 * 
 * Após o acorde ser tocado, todas as teclas terão as frequenciasArray modificadas:
 *    - valor anterior + valor da nota mais frequente
 * 
 * Dada a sequência de Q acordes, seu programa deve imprimir as frequenciasArray que estarão associadas às teclas do piano após TODOS OS ACORDES da sequência terem sido tocados.
*/

// const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const input = require("fs").readFileSync("./dev/stdin", "utf8")
const lines = input.split('\n');

let indexLine = 0

// Leitura dos Dados
const [qTeclas, qAcordes] = lines[indexLine].split(" ").map((valor: string) => parseInt(valor))
indexLine++

// Configuração Inicial do Piano
let piano: Array<number> = []
for (let i = 0; i < qTeclas; i++) { piano.push(1) }
   
// Tocando os Acordes
for (let i = 0; i < qAcordes; i++) {
   // Intervalo do acorde
   let [inicioAcorde, fimAcorde] = lines[indexLine].split(" ").map((valor: string) => parseInt(valor))
   indexLine++

   // Notas do intervalo
   let notasAcorde = piano.slice(inicioAcorde, fimAcorde + 1)

   // Nota mais frequente
   let valorNotaFrequente = maisFrequente(notasAcorde)

   // Modificando os valores das notas no intervalo do acorde
   piano = piano.map((nota, index) => {
      if (index >= inicioAcorde && index <= fimAcorde) {
         return modificaValor(nota, valorNotaFrequente)
      }

      return nota
   })

}

function modificaValor(atual: number, incrementador: number) {
   let novoValor = atual
   for (let i = 0; i < incrementador; i++) {
      if (novoValor === 8) {
         novoValor = 0
      } else {
         novoValor++
      }
   }

   return novoValor
}

function maisFrequente(values: Array<number>) {
   /** 
    * 1 - Frequência de cada nota (X)
    * 2 - Achar a que tem maior frequência
    * 3 - Se houver frequências iguais => Nota de MAIOR VALOR
   */

   // 1 - Frequência de cada nota
   const frequencias = new Map<number, number>()
   values.forEach(v => {
      if (frequencias.has(v))
         frequencias.set(v, frequencias.get(v) + 1)
      else
         frequencias.set(v, 1)
   })

   // 2 - Achar a nota mais frequente
   
   const frequenciasArray: number[][] = []
   frequencias.forEach((value, key) => {
      frequenciasArray.push([key, value])
   })
   let notaFrequente = frequenciasArray[0]

   frequenciasArray.slice(1).forEach(nota => {
      const frequenciaNota = nota[1]
      const frequenciaNotaMaisFrequente = notaFrequente[1]
      if (frequenciaNota > frequenciaNotaMaisFrequente) {
         notaFrequente = nota
      }
   })

   // 3 - Se houver frequências iguais => Nota de MAIOR VALOR
   const notasFrequentes = frequenciasArray.filter(nota => nota[1] === notaFrequente[1])

   notasFrequentes.forEach(nota => {
      const valorNota = nota[0]
      const valorNotaMaisFrequente = notaFrequente[0]

      if (valorNota > valorNotaMaisFrequente) {
         notaFrequente = nota
      }
   })

   return notaFrequente[0]
}

piano.forEach(nota => {
   console.log(nota)
})