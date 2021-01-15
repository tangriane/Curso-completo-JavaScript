function soma(){
    let soma = 0
    for (i in arguments){
        soma += arguments[i] //argumento é um array
    }
    return soma
}
console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(13, 2.2, "teste"))