import cn from 'classnames';

import pokemonCardStyle from './style.module.css';

import cardBackSide from '../../assets/card-back-side.jpg';
const PokemonCard = ({name, img, id, type, values, isActive, onCardClick}) => {
    return (
        <div className={pokemonCardStyle.root} onClick={() => onCardClick(id)}>
            <div className={cn(pokemonCardStyle.pokemonCard, {[pokemonCardStyle.active]: isActive})}>
                <div className={pokemonCardStyle.cardFront}>
                    <div className={cn(pokemonCardStyle.wrap, pokemonCardStyle.front)}>
                        <div className={cn(pokemonCardStyle.pokemon, pokemonCardStyle[type])}>
                            <div className={pokemonCardStyle.values}>
                                <div className={cn(pokemonCardStyle.count, pokemonCardStyle.top)}>{values.top}</div>
                                <div className={cn(pokemonCardStyle.count, pokemonCardStyle.right)}>{values.right}</div>
                                <div className={cn(pokemonCardStyle.count, pokemonCardStyle.bottom)}>{values.bottom}</div>
                                <div className={cn(pokemonCardStyle.count, pokemonCardStyle.left)}>{values.left}</div>
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
                    <div className={cn(pokemonCardStyle.wrap, pokemonCardStyle.back)}>
                        <img src={cardBackSide} alt="Сard Backed" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PokemonCard;