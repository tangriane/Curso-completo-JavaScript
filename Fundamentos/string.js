const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5)) //valor vazio

console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!")) //pode concatenar a string com o +
console.log(escola.replace(/\d/, 'e'))

console.log('Ana, Maria,Pedro'.split(','))
