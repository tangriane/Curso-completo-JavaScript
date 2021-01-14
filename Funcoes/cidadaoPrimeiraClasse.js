// função em JS como um dado
// criar de forma literal

function fun1(){} //toda a função de js retorna alguma coisa

const fun2 = function (){} // anonima


// armazenar em um arrya

const array = [function (a, b){return a+b}, fun1, fun2]

console.log(array[0](2,3))

//armazenar em um atributo de objeto

const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar())

//passar funcao como parametros

function run(fun){
    fun()
}
run(function(){console.log(`executando...`)})

//Um funcao pode retornar/conter um funcao

function soma(a, b){
    return function(c){
        console.log(a+b+c)
    }
}
soma(2,3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)