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
    const SelectedContext = useContext(PokemonContext);
    const [pokemons, setPokemons] = useState({});
    console.log('####: firebase', firebase, "Sel",SelectedContext);
    // const history = useHistory();

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

    const onCardClick = (id) => {
        setPokemons(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                let pokemon = {...item[1]};
                if(pokemon.id === id && !pokemon.isSelected){
                    pokemon.isSelected = true;
                    pushToContext(item);
                };
                // if (pokemon.id === id) {
                //     pokemon.isActive = !pokemon.isActive;
                // };

                acc[item[0]] = pokemon;
                console.log("клик по карте");
                // firebase.postPokemon(item[0], pokemon);
                // database.ref('pokemons/'+ item[0]).set(pokemon);

                return acc;
            }, {});
        });
    };

    const pushToContext = (val) => {
        SelectedContext.pokemon.push(val);
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

    return (
        <div>
            <p> This is Game Page!!!</p>

            <div>
                <button onClick={addNewPokemon}>
                    Добавить покемона
                </button>
                <Link to={'/game/board'}>
                    Начать игру
                </Link>
            </div>
            <Layout>
                <div className={s.flex}>
                    {
                        Object.entries(pokemons).map(([key,{name, img, id, type, values, isSelected}]) => (
                            <PokemonCard
                                name={name}
                                img={img}
                                id={id}
                                type={type}
                                values={values}
                                key={key}
                                isActive={true}
                                minimize
                                className={s.selected}
                                onCardClick={onCardClick}
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