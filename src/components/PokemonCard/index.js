import {useState} from 'react';

import pokemonCardStyle from './style.module.css';

import cardBackSide from '../../assets/card-back-side.jpg';
const PokemonCard = ({name, img, id, type, values}) => {
    const [isActive, setActive] = useState(false)

    const handkeClick = () => {
        setActive(true);
    }
    return (
        <div className={pokemonCardStyle.root} onClick={handkeClick}>
            <div className={`${pokemonCardStyle.pokemonCard} ${isActive ? pokemonCardStyle.active : ''}`}>
                <div className={pokemonCardStyle.cardFront}>
                    <div className={`${pokemonCardStyle.wrap} ${pokemonCardStyle.front}`}>
                        <div className={`${pokemonCardStyle.pokemon} ${pokemonCardStyle[type]}` }>
                            <div className={pokemonCardStyle.values}>
                                <div className={`${pokemonCardStyle.count} ${pokemonCardStyle.top}`}>{values.top}</div>
                                <div className={`${pokemonCardStyle.count} ${pokemonCardStyle.right}`}>{values.right}</div>
                                <div className={`${pokemonCardStyle.count} ${pokemonCardStyle.bottom}`}>{values.bottom}</div>
                                <div className={`${pokemonCardStyle.count} ${pokemonCardStyle.left}`}>{values.left}</div>
                            </div>
                            <div className={pokemonCardStyle.imgContainer}>
                                <img src={img} alt={name} />
                            </div>
                            <div className={pokemonCardStyle.info}>
                                <span className={pokemonCardStyle.number}>#{id}</span>
                                <h3 className={pokemonCardStyle.name}>
                                    {name}
                                </h3>
                                <small className={pokemonCardStyle.type}>Type:
                                    <span>{type}</span>
                                </small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={pokemonCardStyle.cardBack}>
                    <div className={`${pokemonCardStyle.wrap} ${pokemonCardStyle.back}`}>
                        <img src={cardBackSide} alt="Сard Backed" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PokemonCard;