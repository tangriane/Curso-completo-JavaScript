//função defini um bloco (receita de bolo

function imprimirSoma(a, b) { //chves é o bloco
    console.log(a + b)

}
imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10, 1, 12, 45 )
imprimirSoma()

//funcao com retorno
function soma(a, b = 0){
    return a + b
}
console.log(soma(2, 3))
console.log(soma(2))
