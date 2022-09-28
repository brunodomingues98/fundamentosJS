const a = 5
const b = 5

const soma = a + b
const divisao = soma / 5
const multiplicacao = a * b
console.log("resultado da soma é " + soma)
console.log("resultado da divisão é " + divisao)
console.log("resultado da multiplicação é " + multiplicacao)

if (soma === 10) {
    console.log(a + " + " + b + " = for igual a 10, resultado está matemáticamente correto!")
} else {
    console.log("soma está errada")
}

if (divisao === 2) {
    console.log( a + " / " + b + " = resposta da divisão for igual a 2, está correto")
} else {
    console.log("resposta da divisão está errada")
}

if (multiplicacao === 25) {
    console.log(a + " x " + b + " = 25, a multiplicação está OK!")
} else {
    console.log("valor está equivocado!")
}
