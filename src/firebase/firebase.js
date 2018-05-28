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

database.ref().set({
  name: 'Isaac',
  attributes: {
    height: 190,
    weight: 209
  }
}).then(() => {
  console.log('Data is synced');
}).catch((e) => {
  console.log('This failed. ', e);
})

database.ref('location').set({
  city: 'Hamilton'
}).then(() => {
  console.log('Location added');
}).catch((e) => {
  console.log('This Failed. ',e);
})
