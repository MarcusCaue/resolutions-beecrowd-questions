const input = require("fs").readFileSync("./dev/stdin", "utf8")
const lines: string[] = input.split("\n")

let indexLine = 0

const qNumbers = parseInt(lines[indexLine++])

const numbers = []
for (let i = 0; i < qNumbers; i++) {
  numbers.push(parseInt(lines[indexLine++]))
}
numbers.sort((a, _b) => a % 2 === 0 ? -1 : 1 )

const firstImparNumber = { value: -1, index: -1 } 
for (let i = 0; i < numbers.length; i++){
  const n = numbers[i]
  if (n % 2 !== 0) {
    firstImparNumber.value = n
    firstImparNumber.index = i
    break
  }
}

const numParesSorted = numbers.filter(n => n % 2 === 0).sort((a, b) => a - b)

numbers.splice(0, firstImparNumber.index, ...numParesSorted)

const numImparesSorted = numbers.filter(n => n % 2 !== 0).sort((a, b) => b - a)

numbers.splice(firstImparNumber.index, numbers.length - firstImparNumber.index, ...numImparesSorted)

numbers.forEach(n => console.log(n))