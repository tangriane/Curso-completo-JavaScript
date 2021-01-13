function tratarErroLancar(erro){
    throw new Error ('erri aqui')
}
function imprimirNomeGritado(obj){
    try{
    console.log(obj.nome.toUpperCase() + '!!!')
    }catch (e){
        tratarErroLancar(e)
    } finally {
        console.log('final')
    }
}
const obj = { nome: 'Roberto'}
imprimirNomeGritado(obj)