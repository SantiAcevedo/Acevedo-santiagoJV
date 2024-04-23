const minimo = 2;
const maximo = 20;
const divisor = 6;
const resultado = obtenerDivisores(minimo, maximo, divisor);
console.log("Divisores de", divisor, "en el rango de", minimo, "a", maximo, ":", resultado);

function obtenerDivisores(minimo, maximo, divisor) {
    let divisores = [];

    for (let i = minimo; i <= maximo; i++) {
        if (i % divisor === 0) {
            divisores.push(i);
        }
    }

    return divisores;
}