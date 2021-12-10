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