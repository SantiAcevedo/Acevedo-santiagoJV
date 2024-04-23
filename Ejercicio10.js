var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sumaPares = 0;

for (var i = 0; i < numeros.length; i++) {
    
    if (numeros[i] % 2 === 0) {
        sumaPares += numeros[i];
    }
}
console.log("La suma de los elementos pares es: " + sumaPares);