const valores = [7.7, 8.9, 8.3, 9.2] //dina,ico

console.log(valores[0], valores[3])
console.log(valores[4])//valores indefinido 

valores[4] = 10

console.log(valores)
console.log(valores.length)


valores.push({id: 3}, false, null, 'teste') //multiplos valores. Add novos elementos e aceita multiplos valores
console.log(valores) //não misturar os dados


console.log(valores.pop())//excluir elementos do array
delete valores[0] //tirar um atributo de um objeto
console.log(valores)

console.log(typeof valores)