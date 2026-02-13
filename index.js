// Este es un programa básico para probar nuestro Pipeline
console.log("Iniciando sistema de pruebas de Calidad...");

function sumar(a, b) {
    return a + b;
}

const resultado = sumar(5, 5);
console.log("Resultado del cálculo de prueba (5+5): " + resultado);

if (resultado === 10) {
    console.log("¡Prueba exitosa! El código funciona.");
} else {
    console.log("Error en el sistema.");
    process.exit(1); // Esto hace que el pipeline falle si el resultado es incorrecto
}
