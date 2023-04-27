let numeros = [1, 2, 3, 4, 5, 6, 7, 10]

console.log(numeros.findIndex((n, i) => {
  console.log(i)
  if (numeros[i + 1] !== undefined && 1.5 < numeros[i + 1]) {
    return false
  } else {
    return n === 1.5 ? true : false
  }
}))

