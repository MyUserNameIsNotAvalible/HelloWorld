const cars = ['Mazda', 'Ford', 'BMW', 'Merssedes'];
const people = [
    {name: 'Denis', budget: 450},
    {name: 'Vera', budget: 150},
    {name: 'Vlad', budget: 1450},
]
const fib = [1, 1, 2, 3, 5, 8, 13, 21]
 /*console.log (cars)
 cars.push('Renault')
 console.log (cars)
 cars.unshift('Volga')
 console.log (cars)
 const firstCar = cars.shift()
 const lastCar = cars.pop()
 console.log (cars)
 console.log (firstCar)
 console.log (lastCar)
 console.log (cars.reverse())
 console.log (cars)*/

 /*const text = 'Hi, we learn Java Script'
 const reverseText = text.split('').reverse().join('')
 console.log (reverseText)*/

 //console.log (cars.indexOf("BMW"))
 /*const index = people.findIndex(function(person) {
     return person.budget === 1450 
 })

 const person = people.find(function(person) {
     return person.budget === 150
 } )*/
/*let findedPerson
 for (const person of people) {
     console.log(person);
     if (person.budget === 1450) {
        findedPerson = person
     }
 }
console.log(findedPerson);*/
 
 //console.log(index);
 //cars [1] = 'Porsche'
 //console.log(cars);
/*const person = people.find(() => {
    return person.budget === 1450
})
 console.log(person);*/
 /*const person = people.find(person => person.budget === 1450)
 console.log(person);*/
// console.log(cars.includes('BMW'));
//const upperCaseCars = cars.map(car =>{
//    return car.toLocaleUpperCase()
//})
//const pow2 = num => num **2
//const sqrt = num => Math.sqrt(num)
//const pow2Fib = fib.map(pow2)
//console.log(upperCaseCars);
/*const filterNumbers = pow2Fib.filter(num => {
    return num > 20
})
console.log(pow2Fib);
console.log(filterNumbers);*/
const allBudget = people
.filter(person => person.budget <1000)
.reduce((acc, person) => {
      acc+= person.budget
 return acc
}, 0)
console.log(allBudget);
