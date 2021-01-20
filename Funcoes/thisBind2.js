//This poode variar
function Pessoa() {
    this.idade = 0
    const self = this
    setInterval(function () {
        self.idade++
        console.log(self.idade)

    }/*.bind(this)*/, 1000)
    //função anonima //dispara uma função no intervalo
}
new Pessoa 