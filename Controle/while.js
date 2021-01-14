function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0
while(opcao != -1){ //se a expressao for verdadeira, continue executando ate que seja falso ai sai do laço
    opcao = getInteiroAleatorioEntre (-1, 10)
    console.log(`Opção escolhida foi ${opcao}`)
} 
console.log('ate a proxima') //retição baseado em verdadeiro e falso
