function Pessoa(){
    this.idade = 0

    setInterval( () => { //dentro do arrow o this funciona
        this.idade++
        console.log(this.idade)
    }, 1000)
}
new Pessoa