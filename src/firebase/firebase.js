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

export {firebase, database as default};
