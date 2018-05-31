import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBSSeawu5fU7S8BHiuEz5kgrc_HbIOoYXU",
  authDomain: "expensify-react-course-app.firebaseapp.com",
  databaseURL: "https://expensify-react-course-app.firebaseio.com",
  projectId: "expensify-react-course-app",
  storageBucket: "expensify-react-course-app.appspot.com",
  messagingSenderId: "518575016960"
};

firebase.initializeApp(config);

const database = firebase.database();


database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
})

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = []
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })
//   console.log(expenses);
// })

// database.ref('expenses').once('value').then((snapshot) => {
//   const expenses = []
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })
//   console.log(expenses);
// })

// database.ref('expenses').push({
//   description: '1',
//   amount: 200,
//   note: '',
//   createdAt: 1234
// })

// const notes = [{
//   id: '12',
//   title: 'First Note',
//   body: 'This is my first note'
// }, {
//   id: '13',
//   title: 'Second note',
//   body: 'this is a second note'
// }]
//
// database.ref('notes').set(notes)

// database.ref().on('value', (snapshot) => {
//   const name = snapshot.val().name
//   console.log(`${name} is a software developer`);
// })
// database.ref().set({
//   name: 'Isaac',
//   location: {
//       city: "Hamilton",
//       country: "Canada"
//   },
//   attributes: {
//     height: 190,
//     weight: 209
//   }
// }).then(() => {
//   console.log('Data is synced');
// }).catch((e) => {
//   console.log('This failed. ', e);
// })
//
// database.ref().update({
//   'location/city': 'Boston',
//   'attributes/weight': 210
// })

//
// database.ref('location').set({
//   city: 'Hamilton'
// }).then(() => {
//   console.log('Location added');
// }).catch((e) => {
//   console.log('This Failed. ',e);
// })
