
//Montage
const montage = {
    gameFace:'ready',
               readyforthis: true,
               victorySound: 'bring it on !'
            };
            console.log(montage)
            console.log(montage.victorySound)


            //Hometown
            const hometown = {

               name: 'Woolwich',
               population: 1345,
               country: {name:'united kingdom', population:100000}

               //the country object inside should also have a name and population
              
                           };

console.log(hometown.name, hometown.population)
console.log(hometown.country.name) 
console.log(hometown.country.population)


//Movie Characters

//Create an array of three of your favourite movie characters. Each character should be an object with the following properties:

//name (String)
//movie (String)



const favouriteMovieCharacters = [
    {name: 'Hulk', Movie:'The Hulk'}, 
    {name: 'Thor', Movie:'Love and Thunder'}, 
    {name: 'Spiderman', Movie:'Into the spider verse'}
];

    

console.log(favouriteMovieCharacters[0].name)
console.log(favouriteMovieCharacters.join <{name:'Thor', Movie:'Love and Thunder'}>)//not sure how to complete
console.log(favouriteMovieCharacters [2].name , [2].Movie)//not sure how to complete


//Friendly Monkey

//​Create a monkey object, which has the following properties:

const monkey = {
    name:'Tami',
    species: 'Capuchin',
    foodsEaten: ['banana','pear','insects'],

    

};   

monkey.eatSomething = function (food) {foodsEaten.push('apple');}//not sure
   monkey.introduce = function () {'my name is'}  //not sure


console.log(monkey.foodsEaten);
           



//eatSomething(food) which adds a new item into the monkey's foodsEaten array.
//introduce(): returns a string introducing itself, including its name, species, and the last thing it ate.
//​Exercise your monkey by retrieving its properties and using its methods. Practice using both syntaxes for retrieving properties (dot notation and bracket notation).​

//Frankenstein's Monster


const laboratory = {
   monster: {}, // an object that lives in the lab
   experiment(partName, partValue) {
  
   }
}