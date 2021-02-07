import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAWqRNT0124kTXch21S9xFRGn41U8Y6uIw",
    authDomain: "pokemon-game-2eddd.firebaseapp.com",
    databaseURL: "https://pokemon-game-2eddd-default-rtdb.firebaseio.com",
    projectId: "pokemon-game-2eddd",
    storageBucket: "pokemon-game-2eddd.appspot.com",
    messagingSenderId: "587613824932",
    appId: "1:587613824932:web:0f32c1e9d8cc0c928b4331"
};

firebase.initializeApp(firebaseConfig);

export const fire = firebase;
export const database = firebase.database();

export default database;