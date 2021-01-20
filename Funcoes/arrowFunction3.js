let compraComThis = function (params) {
    console.log( this === params)
    
}

compraComThis(global)


const obj = {}
compraComThis = compraComThis.bind(obj)
compraComThis(global)
compraComThis(obj)

let comparaComThisArrow = param => console.log(this ===param)
comparaComThisArrow(global)
comparaComThisArrow(module.export)



comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // arrow é mais forte!!

comparaComThisArrow(module.export) //continua com o this (não tem variação)