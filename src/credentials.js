
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/database/dist/index.cjs'
import firebase from 'firebase';
const Credentials = {
    apiKey: "AIzaSyD0SST1fiFu7-sZEufm7eOgY3aNhjVl164",
    authDomain: "my-social-network-c91b8.firebaseapp.com",
    databaseURL: "https://my-social-network-c91b8.firebaseio.com",
    projectId: "my-social-network-c91b8",
    storageBucket: "my-social-network-c91b8.appspot.com",
    messagingSenderId: "442659443450"  
};
const config = firebase.initializeApp(Credentials);
// const db = firebase.database()
// const auth = firebase.auth();
// // const on = firebase.on();

// export {
//     db,
//     auth,
//     firebase,
//     // on,
// };
export { config };