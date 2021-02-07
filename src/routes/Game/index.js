import {useHistory} from 'react-router-dom';
import {useState, useEffect} from 'react';
import PokemonCard from '../../components/PokemonCard';
import Layout from "../../components/Layout";

import database from "../../service/firebase";
import s from "../Home/style.module.css";


const GamePage = () => {
    const [pokemons, setPokemons] = useState({});
    const history = useHistory();

    useEffect(() => {
        database.ref('pokemons').on('value', (snapshot) => {
            setPokemons(snapshot.val());
        })
    }, []);

    const handleClickButton = () => {
        history.push('/');
    };

    const addNewPokemon = () => {
     const data = Object.entries(pokemons);
     const [key, value] = data[0];

     database.ref('pokemons').push(
         value
     );
    }

    const onCardClick = (id) => {
        setPokemons(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = {...item[1]};
                if (pokemon.id === id) {
                    pokemon.isActive = !pokemon.isActive;
                    database.ref('pokemons/' + item[0]).set({...pokemon});
                };

                acc[item[0]] = pokemon;

                return acc;
            }, {});
        });
    };

    return (
            <div>
                <p> This is Game Page!!!</p>
                <div>
                    <button onClick={handleClickButton}>
                        Вернуться на главную страницу
                    </button>
                </div>
                <div>
                    <button onClick={addNewPokemon}>
                        Добавить покемона
                    </button>
                </div>
                <Layout>
                    <div className={s.flex}>
                        {
                            Object.entries(pokemons).map(([key,{name, img, id, type, values, isActive}]) => (
                                <PokemonCard
                                name={name}
                                img={img}
                                id={id}
                                type={type}
                                values={values}
                                key={key}
                                isActive={isActive}
                                onCardClick={onCardClick}
                            />
                            ))
                        }
                    </div>
                </Layout>

            </div>
    );
};

export default GamePage;