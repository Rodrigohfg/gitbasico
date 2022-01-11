function printMyFirstName(firstName) {
    const result = 'My first name is ' + firstName;
    return result;
        
}
 console.log( printMyFirstName( 'Rodrigo' + ' raul'));

 function printMylastName(lastName) {
     const result = 'My last name is ' + lastName;
     return result;
 }
 const otro = 'camacho';
console.log( printMylastName(`Flores ${otro}`));

const nombre = 'luis'
const apellido = 'perez'

console.log( printMyFirstName(nombre) + ' and ' + printMylastName(apellido));

