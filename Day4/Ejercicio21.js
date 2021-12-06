/*
Completa el siguiente programa para imprimir los números que sean mayores a 10.

const nums = [1, 23, 5, 8, 40, 12, 2, 67, 24, 9, 39]
// escribe tu código acá
El resultado debería ser el siguiente:

23
40
12
67
24
39
Nota: este ejercicio lo debes hacer con ciclos y sin ayuda de la función filter de JavaScript. 
Al terminarlo cambia el arreglo original para verificar que funcione con otros números.
*/
log = console.log
const nums = [1, 23, 5, 8, 40, 12, 2, 67, 24, 9, 39]
let newNums = []
for (let index = 0; index < nums.length; index++) {
    if (nums[index] > 10) {
        newNums.push(nums[index])        
    }    
}
for (let index2 = 0; index2 < newNums.length; index2++) {
    log(newNums[index2])    
}