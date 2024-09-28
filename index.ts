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
const enum Size{Small =1,Medium,Large=10};

let mySize:Size = Size.Large;
console.log(mySize);


// functions


function calculateTax(income:number,year:number=2022):number{
    if(year > 2022)
     return income*2
    return income*3
}

console.log(calculateTax(10_000,2023));

// type alisies

type Employee ={
    readonly id:number,
   name:string,
   retire:(date:Date)=>void
}

//objects 
let employe:Employee={
    id:1,name:"Mahiru",retire:(date:Date)=>{
    console.log(date.getDate());
}}
   


employe.retire(new Date());


// union type


function getKBtoLab(weight:number|string):number{
    // narrowing

    if(typeof weight === "number")
      return weight *3;
    else 
     return parseInt(weight)*10;


}

// intersection

type Drag={
onDrga:()=>void;
}

type Resize ={
    onResizze:()=>void;
}

type WidgetUI =  Drag & Resize;

let myUI:WidgetUI={
    onResizze:()=>{},
    onDrga:()=>{},
}

//literal (exact,specific)
type Value = 50 | 100
let value:Value =100 ;


//Nullable type

function myFun(num1:number|null|undefined){
    if(num1)
      console.log(num1);
    else{
        console.log("Hola !");
    }
}

myFun(null);


type menu={
    date:Date,
}

function calDate(id:number):menu|null|undefined{
    return id===0?null:{date : new Date()}
}

let y = calDate(1);

console.log(y?.date);
