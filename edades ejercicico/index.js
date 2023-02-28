bebes = 3
niños = 11
adolescente = 18
adulto = 60
adulto_mayor = 100 

edad = 200

console.log('==> Inicio del programa')

if (edad>=0 && edad<=bebes) {
    console.log('es un bebe')
} else if (edad>=3 && edad<=niños) {
    console.log('esta persona es un niño')
} else if (edad>=11 && edad<=adolescente) {
    console.log('esta persona es un adolescente')
} else if (edad>=18 && edad<=60) {
    console.log("esta persona es un adulto")
}else if (edad>=60 && edad<=100) {
    console.log("esta persona es un adulto mayor")
}
else {
    console.log('la edad no es valida')
}

console.log('==> Fin del programa')


//  con base al codigo anterior, definir un programa para determinar el grupo que pertenece las personas segun su edad
// Bebes : 0 - 3
// Niños : 3 - 11
// Adolecentes: 11 - 18
// Adultos: 18 - 60
// Adultos mayores: 60 o más
