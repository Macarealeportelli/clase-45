// Crear una función obtenerNumeroMayorArray que tome como argumento un array
//  de números y devuelva el mayor número de dicho array.

// obtenerNumeroMayor([2, 7, 12, 1]) // 12

// const numeros = [2, 7, 12, 1]

// const obtenerNumeroMayor = (numeros)=>{
//  let numeroMasGrande = 0
//  for (let i = 0; i < numeros.length; i++) {
   
//     if(numeros[i]>numeroMasGrande){
//         numeroMasGrande = numeros[i];
//     }
//  }
 
//  return numeroMasGrande

// }

// console.log(obtenerNumeroMayor(numeros))

// Crear una función sumarArray que tome como argumento un array de números
// y devuelva la suma de todos los número de dicho array.

// sumar([4, 5, 10]) // 19

const arrayDeNumeros = [4 , 5, 10]

const sumarArray=(arrayDeNumeros)=>{
    let acumuladora = 0
    for (let i = 0; i < arrayDeNumeros.length; i++) {
        
        acumuladora += arrayDeNumeros[i]
        
    }

    return acumuladora

}

console.log(sumarArray(arrayDeNumeros))