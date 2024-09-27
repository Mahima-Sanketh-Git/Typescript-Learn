let sales = 123_456_789;
let is_published: boolean = true;
let product = "Drone";
let init;
init = 'lol';
init = 2;

// any type variable in function

function render(document:any){
    console.log(document)
}

render("Hello typescript");

//arrays

let numbers:number[] = [];
numbers[0]=1;

//tuples

let tups: [number,string] = [1,'lol'];

tups[0];


console.log(tups);

//enums

//use pascalecase
const enum Size{Small =1,Medium,Large};

let mySize:Size = Size.Large;
console.log(mySize);