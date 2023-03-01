// en la insititucion educativa XYZ                             /  
// se tiene el siguiente sitema de notas:

// 100 - 90 Execelente
// 89 - 70 Sobresaliente
// 69 - 50 Aceptable
// 49 - 30 Insuficiente
// 30 - 0 Deficiente

// un alumno saca los siguientes resultados en sus examenes:
// Examen1: 90 
// Examen2: 50 
// Examen3: 80

// cual sera su resultado final?


examen1=80
examen2=50
examen3=80

examen=(examen1+examen2+examen3)/3

exce=100
lim_exce=90
sobre=89
lim_sobre=70
acep=69
lim_acep=50
insu=49
lim_insu=30

console.log('==> Inicio del programa')

if (examen<=exce && examen>=lim_exce) {
    console.log('excelente'+'la nota final :'+examen)
} else if (examen<=sobre && examen>=lim_sobre) {
    console.log('sobresaliente'+'la nota final :'+examen)
} else if (examen<=acep && examen>=lim_acep) {
    console.log('aceptable'+'la nota final :'+examen)} 
else if (examen<=insu && examen>=lim_insu) {
    console.log('insuficiente'+'la nota final :'+examen)
}
else {
    console.log('deficiente'+' la nota final :'+examen)
}

console.log('==> Fin del programa')