//Ejercicio 1 
function sum(numberOne , numberTwo) {
    if (numberOne > numberTwo){
        return `Number one is bigger: ${numberOne}`;
    } else 
        return `Number two is bigger: ${numberTwo}`;
  }

console.log(sum(9,6));

//Ejercicio 2
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
    let word =""
    for (const item of param){
       if (item.length > word.length){ 
        word = item
       }
    }
    return word
}
console.log(findLongestWord(avengers));

//Ejercicio 3 
const numbers = [1, 2, 3, 5, 45, 37, 58];
let allSummed = 0
function sumAll(list) {
    for (const item in list){
        allSummed += list[item] //el codigo me daba error por que estaba sumando solo item lo cual era el index y me sumaba 123456
                                 //hay que imprimir console.log(item) para ver si lo que imprime es la lista, de esa manera te aseguras que está sumando lo que necesitas 
    } 
    return allSummed
}
console.log(sumAll(numbers));

//Ejercicio 4 
const numbersTwo = [12, 21, 38, 5, 45, 37, 6];
let promedio = 0
function average(listTwo) {
  for(const item of listTwo){
    promedio += item;
  }
  promedio /= listTwo.length //Hay que sacarlo del bucle para que no lo divida constantemente uno entre uno, etc
  return promedio;
}
console.log(average(numbersTwo));

//Ejercicio 5
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
let sumaString = 0
let sumaNumber = 0

function averageWord(listaItem) {
    for (const index of listaItem){
        if (typeof index === "number"){
          sumaNumber += parseInt(listaItem.splice(index,1));
        } else {
          sumaString += listaItem.splice(index.length,1);
        }
        
    }
 return `Los numeros sumados son ${sumaNumber} y el numero de letras sumadas es ${sumaString}`
}
console.log(averageWord(mixedElements));
//no me sale ni de casualidad este ejercicio  >.<

//Ejercicio 6

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  function removeDuplicates(list) {
    for (const food of list.sort()){
      //console.log(food, list.indexOf[food]+1);
      if (food == list[list.indexOf(food)+1]){ //push todos los elementos q no se repiten en la nueva variable 
        list.splice(list.indexOf(food), 1); //includes 
      }
    }
    return list
  }
  
  removeDuplicates(duplicates);
  console.log(removeDuplicates(duplicates));

//
var nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
 
function finderName(paramList,paramItem) { // Two arguments. If paramItem is inside of ParamList
  for (const name of paramList){
    if (name == paramItem){
      return true
    }else continue
  }
  return false
}
console.log(finderName(nameFinder, 'Bruce'));


const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];
function repeatCounter(paramRept){ //paramRept es el string o argumento que le daremos a la funcion cuando la invoquemos para q el loop lo encuentre 
  const emptyObject = {}
  for (word of paramRept){
    if(word in emptyObject){
      emptyObject[word] += 1
    }else emptyObject[word] = 1
  }
  return emptyObject
}
console.log(repeatCounter(counterWords));
