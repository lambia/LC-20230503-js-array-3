const classe84 = ['Paolo', 'Giulia', 'Marco'];
const classe95 = ['Marco Giammari', 'Patrik Gjikolaj', 'Gabriele Rizzo'];

// for (let index = 0; index < classe84.length; index++) {
//     const element = classe84[index];
//     console.log("For: ", element);
// }
 
// classe84.forEach((studente, posizione) => console.log(posizione, studente) );

classe84.forEach((studente, i, array) => {
    console.log(`Studente ${i+1} -> ${studente}`);
});

classe95.forEach((studente, i, array) => {
    console.log(`Studente ${i+1} -> ${studente}`);
});


classe84.forEach(lavoraArray);
classe95.forEach(lavoraArray);

function lavoraArray(elementoCorrente, i, array) {
    //Se è presente uno studente nell'array in posizione i+1, cioè attuale+1
    if( array[i+1] != undefined ) {
        console.log(`Chiamo alla lavagna ${elementoCorrente}, si prepari ${array[i+1]}`);
    } else {
        console.log(`Chiamo alla lavagna ${elementoCorrente}.`);
    }
}


//array di oggetti
const cats = [
    { name: 'Jerry', color: 'Gray'},
    { name: 'Felix', color: 'Black and White'},
    { name: 'Garfield', color: 'Orange'},
];
    
cats.forEach((element, index, array) => {
    console.log(`${element.name}'s color is ${element['color']}`);

    // if(index == array.length-1){
    //     console.log("Questo era l'ultimo");
    // }
});



//map su array di numeri
const numeri = [1, 2, 3, 4, 5];

//Così funziona come un foreach normale
numeri.map((numero) => {
    console.log("numero da map: ", numero);
});

//Se assegniamo il return di map, abbiamo un nuovo array, in cui ogni elemento è sostuito da "numero x numero"
const numeriQuadratiMap = numeri.map((numero) => {
    return numero * numero;
});

//Con un normale for (o anche col foreach) avremmo dovuto pushare singolarmente in nuovo array
const numeriQuadratiFor = [];
for (let i = 0; i < numeri.length; i++) {
    let numeroCorrente = numeri[i];
    let numeroNuovo = numeroCorrente * numeroCorrente;
    numeriQuadratiFor.push( numeroNuovo );
}

console.log("numeri INVARIATI", numeri);
console.log("numeri AL QUADRATO tramite MAP", numeriQuadratiMap);
console.log("numeri AL QUADRATO tramite FOR", numeriQuadratiFor);

const arrayFiltrato = numeri.filter((numero) => {
    if(numero%2 == 0) {
        return true;
    }

    return false;
});

//Oneliner con arrow function con return implicito
// const arrayFiltrato = numeri.filter((numero) => numero%2 == 0);

console.log("Array filtrato con map", arrayFiltrato); // [2, 4]

let pari = [];
for (let i = 0; i < numeri.length; i++) {
    const numero = numeri[i];
    if(numero%2 == 0) {
        pari.push(numero);
    }
}
console.log("Array filtrato con for", pari); // [2, 4]
