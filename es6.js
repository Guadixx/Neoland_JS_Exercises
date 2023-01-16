//1.ARROWS
const suma = (a = 10, b = 5) => a + b;

const result = suma();
console.log(result)

const sumaUnParametro = (a, b = 5) => a + b;

const resultUnParametro = sumaUnParametro(20);
console.log(resultUnParametro);

const sumaDosParametros = (a, b) => a + b;

const resultDosParametros = sumaDosParametros(20,6);
console.log(resultDosParametros);

//2.1 En base al siguiente javascript, crea variables en base a las propiedades 
//del objeto usando object destructuring e imprimelas por consola. Cuidado, 
//no hace falta hacer destructuring del array, solo del objeto.

const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020}
const destructuring = {title, gender, year} = game ;
console.log(title);
console.log(gender);
console.log(year);
//2.2 En base al siguiente javascript, usa destructuring para crear 3 variables 
//llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
//imprimelo por consola.

const fruits = ['Banana', 'Strawberry', 'Orange'];
const fruit1 = fruits [0];
const fruit2 = fruits [1];
const fruit3 = fruits [2];
console.log(fruit1, fruit2, fruit3);

//2.3 En base al siguiente javascript, usa destructuring para crear 2 
//variables igualandolo a la función e imprimiendolo por consola.

const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};
const destrucOne = {name} = animalFunction ;
const destrucTwo = {race} = animalFunction;
const animalFunctionTwo = () => {
    return {destrucOne, destrucTwo}
}
console.log(animalFunction());

//2.4 En base al siguiente javascript, usa destructuring para crear las 
//variables name y itv con sus respectivos valores. Posteriormente crea 
//3 variables usando igualmente el destructuring para cada uno de los años 
//y comprueba que todo esta bien imprimiendolo.

const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }

const nameOfCar = car.name
const itvOfCar = car.itv;
const añoUno = itvOfCar[0];
const añoDos = itvOfCar[1];
const añoTres = itvOfCar[2];

console.log(nameOfCar);
console.log(añoUno);
console.log(añoDos);
console.log(añoTres);

//Iteracion 3: Spread operators

//3.1 Dado el siguiente array, crea una copia usando spread operators.
const pointsList = [32, 54, 21, 64, 75, 43]
function copiaPointsList(paramList) {
    return pointsList;
}
console.log(copiaPointsList(pointsList));

//3.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
objectCopia = {
    nombre: toy.name,
    fecha: toy.date,
    colores: toy.color,
};
console.log(objectCopia);

//3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando 
//spread operatos.
const pointsList3 = [32, 54, 21, 64, 75, 43];
const pointsList2 = [54,87,99,65,32];

const listsMixed = [...pointsList3, ...pointsList2];
console.log(listsMixed);


//3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos 
//con spread operators.
const toy4 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

const newObject = {...toy4,...toyUpdate};
console.log(newObject);

//3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 
//pero sin editar el array inicial. De nuevo, usando spread operatos.
const colorslist = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
const Newcolores = []
//const {[2]: ...NewColores} = colorslist;

//Iteración 4: Map

//4.1 Dado el siguiente array, devuelve un array con sus nombres 
//utilizando .map().
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const names = users.map(user => user.name);
console.log(names);

//4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
//de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
//empiece por 'A'.
const usersTwo = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];
for (const object of usersTwo){
	if (object.name.startsWith("A")){
        object.name = "Anacleto";
    }else{
        namesTwo = usersTwo.map(user => user.name);
    }
}
console.log(namesTwo);
//4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
//de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
//cuando el valor de la propiedad isVisited = true.
const cities = [
	{isVisited:true, name: 'Tokyo'}, 
 	{isVisited:false, name: 'Madagascar'},
 	{isVisited:true, name: 'Amsterdam'}, 
 	{isVisited:false, name: 'Seul'}
 ];
 visitedCities = []
 for (const object of cities){
    if (object.isVisited === true){ 
        console.log(object.name + " visitado")
        } else {
            console.log(object.name);
        }

 }
 
 //5  FILTER 

 //5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
//con los valores que sean mayor que 18
const agesTwo = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const numFilt = agesTwo.filter(age => age > 18);
console.log(numFilt);

//5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
//con los valores que sean par.
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const evenNumbers = ages.filter(number => number % 2 ===0);
console.log(evenNumbers);

//5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
//con los streamers que tengan el gameMorePlayed = 'League of Legends'.
const streamersOne = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
const lol = streamersOne.filter(game => game.gameMorePlayed === "League of Legends");
console.log(lol);

//5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
//con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos 
//usar la funcion .includes() para la comprobación.
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const nameU = streamers.filter(uOnName => uOnName.name.includes('u'));
console.log(nameU);
//5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan 
//el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion 
//.includes() para la comprobación.
//Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando 
//.age sea mayor que 35.

const gamePlayed = streamers.filter(juego => juego.gameMorePlayed.includes('Legends'));
const ageGamePlayed = gamePlayed.filter(age => age.age > 35);
delete gamePlayed.filter(gamer => gamer.age > 35);
delete Object.assign(ageGamePlayed[0], { GAMEMOREPLAYED: ageGamePlayed[0].gameMorePlayed})['gameMorePlayed'];
console.log(gamePlayed);

//5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
//los streamers que incluyan la palabra introducida en el input. De esta forma, si 
//introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
//introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.

//Iteracio 6: FIND

//6.1 Dado el siguiente array, usa .find() para encontrar el número 100.
const numbers = [32, 21, 63, 95, 100, 67, 43];

const findHundred = numbers.find(number => number === 100);
console.log(findHundred);

//6.2 Dado el siguiente array, usa .find() para econtrar la pelicula del año 2010.
const movies = [
	{title: 'Madagascar', stars: 4.5, date: 2015},
	{title: 'Origen', stars: 5, date: 2010},
	{title: 'Your Name', stars: 5, date: 2016}
];
const findMovie = movies.find(movie => movie.date === 2010);
console.log(findMovie);

//6.3 Dado el siguiente javascript, usa .find() para econtrar el alien de nombre 
//'Cucushumushu' y la mutación 'Porompompero'. Una vez que los encuentres, usa 
//spread operator para fusionarlos teniendo en cuenta que el objeto de la mutación 
//lo queremos meter en la propiedad .mutation del objeto fusionado.
const aliens = [
	{name: 'Zalamero', planet: 'Eden', age: 4029},
	{name: 'Paktu', planet: 'Andromeda', age: 32},
	{name: 'Cucushumushu', planet: 'Marte', age: 503021}
];
const mutations = [
	{name: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor'},
	{name: 'Fly me to the moon', description: 'Permite volar, solo y exclusivamente a la luna'},
	{name: 'Andando que es gerundio', description: 'Invoca a un señor mayor como Personal Trainer'}
];
const findCucu = aliens.find(alien => alien.name === 'Cucushumushu');
const findPoro = mutations.find(mutation => mutation.name === 'Porompompero');
console.log(findCucu);
console.log(findPoro);

fusionObjet = {...findCucu ,mutation:{ ...findPoro}};
console.log(fusionObjet);

//7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de 
//los alumnos usando la función .reduce().

const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

const califications = exams.reduce((acc,exam) => acc + exam.score, 0);
console.log(califications);
//7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los 
//alumnos que esten aprobados usando la función .reduce().

const aproved = exams.filter(exam => exam.score >= 5);
const aprovedSum = aproved.reduce((acc,exam) => acc + exam.score, 0);
//7.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce().
const aprovedMedia = aprovedSum / aproved.length;
console.log(aprovedMedia);

//8:BONUS;
// 6.1 Dado el siguiente javascript filtra los videojuegos por gender = 'RPG' usando 
// .filter() y usa .reduce() para conseguir la media de sus .score. 
// La función .find() también podría ayudarte para el contrar el genero 'RPG' en el 
// array .gender.

const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG', 'La cosa más puto bonita que he visto nunca'], score: 10},
]

const filteringVideo = videogames.filter(videogame => videogame.genders = 'RPG');
const reducingVideo = filteringVideo.reduce((acc,videogame) => acc + videogame.score, 0);
const mediaVideo = reducingVideo / filteringVideo.length;
console.log(mediaVideo);