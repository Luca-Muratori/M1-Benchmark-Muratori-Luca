const newLine=function(input){
    console.log(`\n---===${input}===---`)
}

newLine('exercise 21')
//21) Given variables x = "John" and y = "Doe", write on the console "John <> Doe"
let x='John'
let y='Doe'
console.log(`${x} <> ${y}`)

newLine('exercise 22')
//22) Create an object with properties such name, surname, email
let object={
    name:'Luca',
    surname: 'Muratori',
    email: 'luca@hotmail.it',
}
console.log(object)

newLine('exercise 23')
//23) Delete the email property from the previously created object
delete object.email
console.log(object)

newLine('exercise 24')
//24) Create an array with 10 strings in it
let arrayString24=['lol', 'po', 'anche', 'arm', 'qwerty', 'league', 'legend', 'test', 'exercise', 'dog']


newLine('exercise 25')
//25) Print in the console every string from the previous array
console.log(arrayString24)

newLine('exercise 26')
//26) Create an array with 100 random numbers in it
let arrayRandom26=[]
for(i=0; i<100; i++){
    arrayRandom26[i]=Math.floor(Math.random()*100)+1
}

console.log(arrayRandom26)

newLine('exercise 27')
//27) Write a function to get the maximum and minimum values from the previously created array
Array.prototype.max = function() {
    return Math.max.apply(null, this);
  };
  
  Array.prototype.min = function() {
    return Math.min.apply(null, this);
  };
  
  
  console.log("Max value is: "+arrayRandom26.max()+"\nMin value is: "+ arrayRandom26.min());


  newLine('exercise 28')
  //28) Create an array of arrays, in which every array has 10 random numbers
  let activities = [
    ['Work', 9],
    ['Eat', 1],
    ['Commute', 2],
    ['Play Game', 1],
    ['Sleep', 7]
];

newLine('exercise 29')
//9) Create a function that gets 2 arrays as parameters and returns the longest one
const exercise29=function(arr1, arr2){
    return arr1.length>arr2.length?console.log(`arr1 is longer than arr2`):
                                   console.log(`arr2 is longer than arr`)
}
  
let arr1=activities
let arr2=[1, 2, 3, 4, 5, 6, 7, 8]

exercise29(activities, arr2)

newLine('exercise 30')
//30) Create a function that gets 2 arrays of numbers as parameters and returns the one with the higher sum of values
const exercise30=function(arrNum1, arrNum2){
    let sum1=0
    for(let i=0; i<arrNum1.length; i++){
        
        sum1+=arrNum1[i]
        
    };
    let sum2=0
    for (i=0; i<arrNum2.length; i++){
        sum2+=arrNum2[i]
        
    };

    return sum1>sum2?arrNum1:arrNum2
}

let arrNum1=[1, 2, 3, 4, 5]
let arrNum2=[1, 2, 3]
console.log(exercise30(arrNum1,arrNum2))
