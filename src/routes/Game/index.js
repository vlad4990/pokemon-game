import {useHistory} from 'react-router-dom';
import PokemonCard from '../../components/PokemonCard';
import Layout from "../../components/Layout";

import database from "../../service/firebase";
import s from "../Home/style.module.css";
import {FireBaseContext} from "../../context/firebaseContext";
import {useState} from 'react';
import {useRouteMatch, Route, Switch} from "react-router-dom";

import StartPage from './routes/Start';
import BoardPage from './routes/Board';
import FinishPage from './routes/Finish';
import Firebase from "../../service/firebase";
import {PokemonContext} from "../../context/PokemonContext";



const GamePage = () => {
    const match = useRouteMatch();
    const [pokemon, setPokemon] = useState([])

    const handleSelect = (val) => {
        setPokemon(val)
    }

    return (
        <PokemonContext.Provider value={{pokemon, isSelect: handleSelect }}>
            <Switch>
                <Route path={`${match.path}/`} exact component={StartPage} />
                <Route path={`${match.path}/board`} component={BoardPage} />
                <Route path={`${match.path}/finish`} component={FinishPage} />
            </Switch>
        </PokemonContext.Provider>
    );
};

export default GamePage;