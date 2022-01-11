function suma(x, y) {
    const result = x + y;
    return result;
}

function resta(x, y) {
    const resultado = x - y;
    return resultado; 
}

function multi(x, y) {
    const resultadoo = x * y;
    return resultadoo;
}

function division(x, y) { 
    const resul = x / y;
    return resul;
}
console.log( division(8, 2));
console.log( resta(100, 50));
console.log( multi(5, 5));
console.log( suma(777, 555));

function perimetrocuadrado(lado) {
    const result = lado * 4;
    return result;
}
function perimetro2(l, a) {
    const resultado1 = l * a;
    return resultado1;
}
function areatriangulo(b,a) {
    const result = b * a / 2;
    return result;
}
console.log( areatriangulo(7, 8));

function areacirculo(r) {
    const result = r *r * 3.14;
    return result;
}
console.log( areacirculo(8));

function areatrapecio(b1, b2, a1) {
    const cuantoes = b1 + b2 * a1 / 2;
    return cuantoes;
}
console.log(areatrapecio(5, 10, 8));
