// First add
// function add(a: number, b){
//   return a+b;
// };

// console.log(add(2, '2'));

// Second add
// function add(a: number, b:number){
//   return a+b;
// };

// console.log(add(2, '2'));

// Real Add
function add(a: number, b: number){
  return a+b;
};

console.log(add(2, 2));

const price: number = 100; // This is a number
const tax = 20; //  Actually TypeScript can infer number here; 
const productName = 'pikachu'; //  TypeScript can infer it's a string. 
const isHungry = true; // Boolean

// const weird = tax + isHungry; //  Can't add number and boolean 
// tax.slice(1,5); // Can't slice a number
productName.slice(1,5); // But can slice a string!
const total = price + tax; // Works!

// interface Puppy {
//   name: string;
//   age: number;
// };

// const realPuppy: Puppy = {
//   name: 'Pikachu',
//   age: 1
// };

// const notRealPuppy: Puppy = {
//   says: 'meow' //  Error: this is clearly not a puppy 
// }

// Array<Type>
const cats: Array<string> = ['Simba', 'Aslan'];
//  Type[] does the same thing. 
const cats2: string[] = ['Simba', 'Aslan'];

interface Cat {
  name: string,
  age: number
}

const betterCats: Cat[] = [
  {name: 'Simba', age: 22},
  {name: 'Aslan', age: 9999}
];

console.log(betterCats);

import {Puppy} from './puppy';

var hotdog = new Puppy('Édouard');
console.log(hotdog.bark());
//  Let's create more puppies 
var oscar = new Puppy('Oscar-Claude');
console.log(oscar.bark());


const numbers = [12,23,62,34,19,40,4,9];

console.log(numbers.filter(function(n: number){
  return n > 30;
}));

//  Or use shorthand function notation. 
//  (Also called arrow function) 
console.log(
  numbers.filter(n => n > 30)
);