let valor

console.log(valor) //o valor por padrão é undefined, pois não foi atribuido nada
//console.log(valor2) //nem foi declarado

valor = null //nenhum valor e nenhum endereço - ausencia de valor
console.log(valor)
//console.log(valor.toString()) //vai dar erro de tipo. Pois ela está nula, sempre por um valor padrão 

const produto = {}

console.log(produto.preco) //isso não da erro, vai colocar indefined
console.log(produto)

produto.preco = 3.50

console.log(produto)
produto.preco = undefined //evitar definir undefined 
console.log(!!produto.preco)
console.log(produto)

produto.preco = null //sem preco
console.log(!!produto.preco)
console.log(produto)