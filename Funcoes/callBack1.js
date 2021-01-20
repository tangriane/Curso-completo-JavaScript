const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice){
    console.log (`${indice +1}. ${nome}`)
}
fabricantes.forEach(imprimir) //passar uma função quando o evento acontecer

fabricantes.forEach(fabricantes => console.log (fabricantes))