//Contenido de app.js
// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valueInDollar * 146.26;
    return parseFloat(valueInYen.toFixed(2));
}

const fromYenToPound = function(valueInYen) {
    let valueInPound = valueInYen * 0.01;
    return parseFloat(valueInPound.toFixed(2));
}

const sum = (a, b) => {
    return a + b;
}

//Solo un registro en consola para nosotros
console.log(sum(7, 3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };