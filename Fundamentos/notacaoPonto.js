//acessar membros de um objeto 
console.log(Math.ceil(6.1)) //seria o ponto ex. console"."log

const obj1 = {} 
obj1.nome = 'Bola'
//obj1['nome'] = 'Bola2'
console.log(obj1.nome)

function Obj (nome){
    this.nome = nome // vai deixar publico 
    this.exec = function(){
        console.log('Exec...')
    }
}

const obj2 = new Obj ('Cadeira')
const obj3 = new Obj ('Mesa')

console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()