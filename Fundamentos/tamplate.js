const nome = 'Rebeca'
const concatenacao = 'Ola' + nome + '!'

const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)

//expressoes

console.log(`1 + 1 = ${1 + 1}`)

//dentro da expressão pode chamar uma função

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)