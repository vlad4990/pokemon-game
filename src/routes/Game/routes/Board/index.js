import {useContext, useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
import {PokemonContext} from "../../../../context/PokemonContext";
import s from './style.module.css';

import PokemonCard from "../../../../components/PokemonCard";
import PlayerBoard from "./component/PlayerBoard";

const BoardPage = () => {
    const { pokemons } = useContext(PokemonContext);
    const [board, setBoard] = useState([]);
    const [player1, setPlayer1] = useState(() => {
        return Object.values(pokemons).map(item => ({
            ...item,
            possession: 'blue',
        }))
    });
    const [player2, setPlayer2] = useState([]);
    const [choiceCard, setChoiceCard] = useState( null)

    const history = useHistory();
    console.log(player2)

    useEffect(async () => {
        const boardResponse = await fetch('https://reactmarathon-api.netlify.app/api/board');
        const boardRequest = await boardResponse.json();

        setBoard(boardRequest.data);

        const player2Response = await fetch('https://reactmarathon-api.netlify.app/api/create-player');
        const player2Request = await player2Response.json();

        setPlayer2(() => {
            return player2Request.data.map(item => ({
                ...item,
                possession: 'red',
            }))
        });
    }, []);

    // if(Object.keys(pokemons).length === 0) {
    //     history.replace('/game');
    // }

    const handleClickBoardPlate = (position) => {
        console.log(position)
    }

    return (
        <div className={s.root}>
            <div className={s.playerOne}>
                   <PlayerBoard
                       player={1}
                       cards={player1}
                       onClickCard={(card) => setChoiceCard(card)}
                   />
            </div>
            <div className={s.board}>
                {
                    board.map(item => (
                        <div
                            key={item.position}
                            className={s.boardPlate}
                            onClick={() => !item.card && handleClickBoardPlate(item.position)}
                        >
                            {
                                item.card && <PokemonCard {...item} minimize />
                            }
                        </div>
                    ))
                }
            </div>
            <div className={s.playerTwo}>
                <PlayerBoard
                    player={2}
                    cards={player2}
                    onClickCard={(card) => setChoiceCard(card)}
                />
            </div>
        </div>
    );
};

export default BoardPage;