let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a 
}

dobro = a => 2 * a //função que faz só uma coisa, não acessivel  

console.log(dobro(Math.PI))

let ola = function() {
    return 'Ola'
}

ola = () => 'Olá'
ola = _ => 'Ola'

console.log(ola())