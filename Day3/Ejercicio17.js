/*
Escribe un programa que piense un número de forma aleatoria y le pida al usuario 
que lo trate de adivinar (como en uno de los ejercicios anteriores). 
La diferencia es que esta vez el usuario puede intentar indefinidamente hasta que 
encuentre el número.
*/
const numberDinamyc = Math.floor((Math.random() * 10 ) + 1);
console.log('Número dinámico: ' + numberDinamyc);

let incognit = false

while (!incognit) {
  
    const numberProposal = parseInt(prompt('Ingrese un número entre 1 y 10: '))

    if (numberProposal < 1 || numberProposal > 10) {       
        console.log('Número ingresado no valido')
        incognit
    }else if (numberProposal === numberDinamyc) {
        console.log('Felicitaciones, ese era! ' + numberProposal)
        incognit = true
    }else{
        console.log('Lo siento, intenta nuevamente!')
        incognit
    }    
}   

console.log('*********')

for (let index = numberDinamyc; index === numberProposal; index++) {
    const numberProposal = parseInt(prompt('Ingrese un número entre 1 y 10: '))

    if (numberProposal < 1 || numberProposal > 10) {       
        console.log('Número ingresado no valido')
        incognit
    }else if (numberProposal === numberDinamyc) {
        console.log('Felicitaciones, ese era! ' + numberProposal)
        incognit = true
    }else{
        console.log('Lo siento, intenta nuevamente!')
        incognit
    }     
}