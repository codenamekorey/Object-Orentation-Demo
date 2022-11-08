/*let person = {
    'firstName': 'Chandler',
    'lastName': 'Bong',
    age: 34
};

let fName = 'firstName';

//console.log('dot Notation', person.firstName); //dot notation
//bracket notation
//console.log('bracket Notation ', person[fName])
//console.log('bracket Notation ', person['firstName'])

let meal = {
    appetizer: 'chips and salsa',
    entree: 'pasta',
    dessert: ['Churros', 'lava cake'],
    drink: 'coke',
};

//destructor method
//let {dessert} = meal;
//console.log(dessert[1]);

let {dessert, entree, drink} = meal;
console.log(`This is the dessert${dessert}`);
console.log(`This is the entree${entree}`);
console.log(`This is the drink ${drink}`);

console.log(meal);

/*function giveMeDessert(obj){
    if(obj['dessert']){
        return obj['dessert']
    } else {
        return 'no dessert'
    }
}
*/
//console.log('Dessert: ', giveMeDessert[meal]);

/*
//loop through an object
for(let attribute in person){
    console.log(`this is the key: ${attribute}`)
}
//for(let attribute in person){
//    console.log(`this is the value: ${person[attribute]}`)
//}

//add to object
person.job='Engineer';
//adds array to an object
person['pets'] =['dog', 'dragon'];
for(let attribute in person){
    console.log(`this is the value: ${person[attribute]}`)
}


let teams = {
    teamOne: ['ryan', 'alex', 'wyatt', 'tj'],
    teamTwo: ['henry', 'cole', 'charlie', 'zeke'],
    teamThree: ['porter', 'blake', 'june', 'owen'],
    teamFour: ['brian', 'riley', 'ezra', 'jordan'],
    teamFive: ['grey', 'milo', 'mckay', 'leo']
  }
//delete object
  delete teams.teamFour;
  console.log(teams);
*/

//classes 
class Car {
    constructor(make, model, color){
        this.make = make,
        this.model = model,
        this.color = color
        this.miles = 0
    }
    drive(miles){
        this.miles += miles;
        console.log(`${this.make} increased miles by ${miles}, \n current miles: ${this.miles}`)
    }
}
let myCar = new Car('Tesla', 'Model Y', 'Black');
let yourCar = new Car('Toyota', 'Highlander', 'Blue');

myCar.drive(30)
yourCar.drive(45)
myCar.drive(10)
console.log(myCar);
console.log(yourCar);

//child class //payload is a truck 
class Truck extends Car{
    constructor(make, model, color, payload){
        super(make, model, color)// all the propertices from parent class
        this.payload = payload;
    }

    tow(weight){
        if(weight > this.payload){
            console.log('Max payload exceeded')
        } else {
            console.log('Towing successful')
        }
    }
}

let truck = new Truck('Ford', 'F450', 'black', 100);

//console.log(truck.miles);
truck.drive(15);
//Max payload exceeded;
truck.tow(1239)