//recurso que foi introduzido no ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: "Rua ABC",
        numero: 1000
    }
}

const { nome, idade} = pessoa // tira do objeto pessoa o nome e idade
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: {logradouro, numero, cep = '11'}} = pessoa

console.log(logradouro, numero, cep)
//  console.log(ag, numero)