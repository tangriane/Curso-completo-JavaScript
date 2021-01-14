const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums){
    if (x == 5)  {
        break //ele vai desviar o bloco associado ao for
    }
    console.log(`${x} = ${nums[x]}`) //aqui ele para
}
for (y in nums){
    if (y == 5 ){
        continue //quando chegar no indice  5 ele vai pular 
    }
console.log(`${y} = ${nums[y]}`)
}