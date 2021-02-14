import {Link, useHistory} from 'react-router-dom';
import {useState, useEffect, useContext} from 'react';
import PokemonCard from "../../../../components/PokemonCard";
import Layout from "../../../../components/Layout";

import database from "../../../../service/firebase";
import s from "./style.module.css";
import {FireBaseContext} from "../../../../context/firebaseContext";
import {PokemonContext} from "../../../../context/PokemonContext";

const DATA = {
    "abilities" : [ "blaze", "solar-power" ],
    "base_experience" : 62,
    "height" : 6,
    "id" : 4,
    "img" : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    "name" : "charmander",
    "stats" : {
        "attack" : 52,
        "defense" : 43,
        "hp" : 39,
        "special-attack" : 60,
        "special-defense" : 50,
        "speed" : 65
    },
    "type" : "fire",
    "values" : {
        "bottom" : 1,
        "left" : 4,
        "right" : 6,
        "top" : 7,
        "isActive": false
    }
}

const GamePage = () => {
    const firebase = useContext(FireBaseContext);
    const pokemonsContext = useContext(PokemonContext);
    const [pokemons, setPokemons] = useState({});
    console.log('####: firebase', firebase, "Sel",pokemonsContext);
    const history = useHistory();

    const getPokemons = async () => {
        const response = await firebase.getPokemonsOnce();


        // database.ref('pokemons').once('value', (snapshot) => {
        //     setPokemons(snapshot.val());
        // });
    }

    useEffect(() => {
        firebase.getPokemonSocket((pokemons) => {
            setPokemons(pokemons);
        });
        return () => firebase.offPokemonSocket();
    }, []);

    // const handleClickButton = () => {
    //     history.push('/');
    // };

    const addNewPokemon = () => {
        const data = DATA;


        firebase.addPokemon(data);
        // const newKey = database.ref().child('pokemons').push().key;
        // database.ref('pokemons/' + newKey).set(data).then(() => getPokemons());

        // const [key, value] = data[0];
        //
        // database.ref('pokemons').push(
        //     value
        // );
    }

    const handleChangeSelected = (key) => {
        const pokemon =  {...pokemons[key]};
        pokemonsContext.onSelectedPokemons(key, pokemon);

        setPokemons(prevState => ({
            ...prevState,
            [key]: {
                ...prevState[key],
                selected: !prevState[key].selected,
            }
        }))
    }

    const pushToContext = (val) => {
        pokemonsContext.pokemon.push(val);
        console.log("Пуш покемона");
    }

    // const onCardClick = (id) => {
    //     setPokemons(prevState => {
    //         return Object.entries(prevState).reduce((acc, item) => {
    //             const pokemon = {...item[1]};
    //             if (pokemon.id === id) {
    //                 pokemon.isActive = !pokemon.isActive;
    //                 database.ref('pokemons/' + item[0]).set({...pokemon});
    //             };
    //
    //             acc[item[0]] = pokemon;
    //
    //             return acc;
    //         }, {});
    //     });
    // };

    const handleStartGameClick = () => {
        history.push('/game/board')
    }

    return (
        <div>
            <p> This is Game Page!!!</p>

            <div>
                <button onClick={addNewPokemon}>
                    Добавить покемона
                </button>

            </div>
            <div className={s.buttonWrap}>
                <button
                    onClick={handleStartGameClick}
                    disabled={Object.keys(pokemonsContext.pokemons).length < 5}
                >
                    Начать игру
                </button>
            </div>
            <Layout>
                <div className={s.flex}>
                    {
                        Object.entries(pokemons).map(([key,{name, img, id, type, values, selected}]) => (
                            <PokemonCard
                                className={s.card}
                                name={name}
                                img={img}
                                id={id}
                                type={type}
                                values={values}
                                key={key}
                                isActive={true}
                                isSelected={selected}
                                onCardClick={() => {
                                    if (Object.keys(pokemonsContext.pokemons).length < 5 || selected) {
                                        handleChangeSelected(key)
                                    }
                                }}
                            />
                        ))
                    }
                </div>
            </Layout>
            <p>This is Start Page</p>
        </div>
    );
};

export default GamePage;