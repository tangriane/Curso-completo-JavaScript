const pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao) //com o this ele vai acessar
    }
}
pessoa.falar()
const falar = pessoa.falar
falar() //conflite entre paradigmas
console.log(falar())

const falarDePessoa = pessoa.falar.bind(pessoa) // amarração com o objeto pessoa determinada função apontar para o componete
falarDePessoa()