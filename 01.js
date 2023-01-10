//Iteración 1: Varibles
let myFavoriteHero = "Hulk";
let x = 50;
let h = 5;
let y = 10;
const z = h + y; 

//Itineración 2: Variables Avanzadas 
//1.1
const character = {
    name: "Jack Sparrow",
    age: 25,
};
//1.2

const kingInTheNorth = {
    firstName: "Jon",
    lastName: "Snow",
    age: 24,
    
};

console.log(`Soy ${kingInTheNorth.firstName} ${kingInTheNorth.lastName}, tengo ${kingInTheNorth.age} y me gustan los lobos`);

//1.3

const toy1 = {
    name: "Bus myYear", 
    price: 19,
};

const toy2 = {
    name: "Rallo mcKing",
    price: 29,
}

const sumPrecio = (toy1.price + toy2.price); 
console.log(sumPrecio);

//1.4

let globalBasePrice = 10000;
const car1 = {
    name: 'BMW m&m', 
    basePrice: 50000, 
    finalPrice: 60000};
const car2 = {
    name: 'Chevrolet Corbina', 
    basePrice: 70000, 
    finalPrice: 80000};
console.log(car1, car2)

globalBasePrice = 25000;
car1.finalPrice = car1.basePrice + globalBasePrice;
car2.finalPrice = car2.basePrice + globalBasePrice;
console.log(car1, car2);

//Iteración 3: Operadores 
//1.1
numA = 10;
numB = 5;
console.log(numA * numB);
//1.2
numC = 10; 
numD = 2;
console.log(numC / numD);
//1.3
numE = 15;
numF = 9;
console.log(numE / numF);
//1.4
p = 10;
j = 5;
o = p + j;
console.log(o);
//1.5
c = 10;
m = 5;
w = c * m;
console.log(w);

//Iteración 4: Arrays 
//1.1
avengers = ["HULK", "SPIDERMAN", "BLACKPANTHER"];
const avengersPrimerElementoLista = avengers.shift();
console.log(avengersPrimerElementoLista);

//1.2

avengers.unshift("Iron Man");
console.log(avengers);

//1.3
console.log(avengers.length);

//1.4
mejorShow = ["Rick", "Beth", "Jerry"];
mejorShow.push("Morty", "Summer");
console.log(mejorShow.slice(-1));

//5.CONDICIONALES
number1 = 10;
number2 = 20;
number3 = 2;

if(number1 === 10){
    console.log('number1 es estrictamente igual a 10')
}

if (number2 / number1 ===2){
  console.log("number2 dividido entre number1 es igual a 2");
}

if (number1 != number2){
  console.log("number1 es estrictamente distinto a number2");
}

if (number3 != number1){
  console.log("number3 es distinto number1");
}

if ((number3 * 5) === number1){
  console.log("number3 por 5 es igual a number1");
}

if ((number3 * 5) === number1 && (number1 * 2) === number2){
  console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}

if ((number2 / 2) === number1 || (number1 / 5) === number3) {
  console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}

//Iteración 6: Bucles 
 //1.1
 let i;
 for (i = 0; i < 10; i++){
    console.log(i);
 }

 //1.2
 for (i = 0; i < 10; i++){
    if ((i % 2) === 0){
        console.log(i);
    }
        
 }
 //1.3
 for (i = 1; i <= 10; i++){
    if (i <= 9){
        console.log("Intentando dormir oveja");
    } else if (i === 10){
        console.log("dormido!");
    }

}