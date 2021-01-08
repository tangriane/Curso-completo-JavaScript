//par nome/valor

const saudacao = 'Opa ' //contexto léxico 1 (em qual local fisico sua variavel foi definido)

function exec (){
    const saudacao = 'Falaa' // contexto lexico 2
    return saudacao
}
//objetos soa grupos aninhado de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 'Pedro',
    peso: 'Pedro',
    endereco: {
        lougadore: 'Rua exemplo',
        numero: 123
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)