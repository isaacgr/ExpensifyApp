//Object Destructuring

// const person = {
//   name: 'Isaac',
//   age: 26,
//   location: {
//     city: 'Hamilton',
//     temp: 7
//   }
// };
//
// const {name: firstName = 'Anonymous', age} = person;
// console.log(`${firstName} is ${age}.`);
//
// const {city, temp: temperature} = person.location;
// if (city && temperature){
//   console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };
//
// const {name: publisherName = 'Self-Published'} = book.publisher
//
// console.log(publisherName);

// Array Destructuring

const address = ['1299 Juniper Street', 'Hamilton', 'Ontario', 'L8K2R4'];
const [street, city, province='B.C.', postalCode] = address;
console.log(`You are in ${city} ${province}.`);
