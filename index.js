// Crear una función obtenerNumeroMayorArray que tome como argumento un array
//  de números y devuelva el mayor número de dicho array.

// obtenerNumeroMayor([2, 7, 12, 1]) // 12

const numeros = [2, 7, 12, 1]

const obtenerNumeroMayor = (numeros)=>{
 let numeroMasGrande = 0
 for (let i = 0; i < numeros.length; i++) {
   
    if(numeros[i]>numeroMasGrande){
        numeroMasGrande = numeros[i];
    }
 }
 
 return numeroMasGrande

}

console.log(obtenerNumeroMayor(numeros))