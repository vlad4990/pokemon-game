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

class Firebase {
    constructor() {

        this.fire = firebase;
        this.database = this.fire.database();
    }

    getPokemonSocket = (cb) => {
        this.database.ref('pokemons').on('value', (snapshot) => {
            cb(snapshot.val());
        })
    }

    offPokemonSocket = () => {
        this.database.ref('pokemons').off()
    }

    getPokemonsOnce = async () => {
        return await this.database.ref('pokemons').once('value').then(snapshot => snapshot.val());
    }

    postPokemon = (key, pokemon) => {
        this.database.ref(`pokemons/${key}`).set(pokemon);
    }

    addPokemon = (data, cb) => {
        const newKey = this.database.ref().child('pokemons').push().key;
        this.database.ref('pokemons/' + newKey).set(data).then(() => cb());
    }
}

// export const fire = firebase;
// export const database = firebase.database();

export default Firebase;