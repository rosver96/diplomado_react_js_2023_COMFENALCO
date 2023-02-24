
let harina = 2500;
let huevo = 500;
let levadura = 1200;
let chocolate = 7000;
let coco = 9.000;
let vainilla = 3000;
let pastel_1 = 0;
let pastel_2 = 0;
let pastel_3 = 0;
let mantequilla = 4500;


pastel_1 = ( harina + (huevo*12) + levadura + vainilla + mantequilla );
console.log(" el valor del pastel_1 es de : " + pastel_1)
pastel_2 = ( harina + (huevo*6) + levadura + chocolate + mantequilla);
console.log(" el valor del pastel_2 es de : " + pastel_2)
pastel_3 = (harina + (huevo*15) + levadura + coco + mantequilla);
console.log(" el valor del pastel_3 es de : " + pastel_3)

if (pastel_1 < pastel_2 & pastel_1 < pastel_3) {
    console.log("el pastel_1 es mas economico")
}
else if (pastel_2 < pastel_1 & pastel_2 < pastel_3){
    console.log("el pastel_2 es mas economico")
}
else if (pastel_3 < pastel_1 & pastel_3 < pastel_2){
    console.log("el pastel_3 es mas economico")
}
else {
    console.log("tienen el mismo costo")
}

