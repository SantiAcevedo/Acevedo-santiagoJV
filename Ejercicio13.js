let personas = [
    { nombre: "Alicia", sexo: "femenino", edad: 47 },
    { nombre: "Martín", sexo: "masculino", edad: 35 },
    { nombre: "Mateo", sexo: "masculino", edad: 18 },
    { nombre: "Agostina", sexo: "femenino", edad: 21 },
    { nombre: "Maximo", sexo: "masculino", edad: 75 },
];

function calcularPromedioEdad(listaPersonas) {
    let totalEdad = 0;
    listaPersonas.forEach(persona => {
        totalEdad += persona.edad;
    });
    return totalEdad / listaPersonas.length;
}

function nombreMujerMayorEdad(listaPersonas) {
    let mayorEdad = 0;
    let nombreMujerMayorEdad = "";
    listaPersonas.forEach(persona => {
        if (persona.sexo === "femenino" && persona.edad > mayorEdad) {
            mayorEdad = persona.edad;
            nombreMujerMayorEdad = persona.nombre;
        }
    });
    return nombreMujerMayorEdad;
}

function nombreHombreMenorEdad(listaPersonas) {
    let menorEdad = Infinity;
    let nombreHombreMenorEdad = "";
    listaPersonas.forEach(persona => {
        if (persona.sexo === "masculino" && persona.edad < menorEdad) {
            menorEdad = persona.edad;
            nombreHombreMenorEdad = persona.nombre;
        }
    });
    return nombreHombreMenorEdad;
}

function promedioEdadMujeres(listaPersonas) {
    let totalEdadMujeres = 0;
    let cantidadMujeres = 0;
    listaPersonas.forEach(persona => {
        if (persona.sexo === "femenino") {
            totalEdadMujeres += persona.edad;
            cantidadMujeres++;
        }
    });
    return totalEdadMujeres / cantidadMujeres;
}

let promedioEdadTotal = calcularPromedioEdad(personas);

let mujerMayorEdad = nombreMujerMayorEdad(personas);

let hombreMenorEdad = nombreHombreMenorEdad(personas);

let promedioEdadMujeresTotal = promedioEdadMujeres(personas);

console.log("Promedio de edad total:", promedioEdadTotal);
console.log("Nombre de la mujer con mayor edad:", mujerMayorEdad);
console.log("Nombre del hombre con menor edad:", hombreMenorEdad);
console.log("Promedio de edad de las mujeres:", promedioEdadMujeresTotal);