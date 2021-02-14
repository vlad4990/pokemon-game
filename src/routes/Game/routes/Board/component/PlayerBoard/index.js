import {useState} from "react";
import cn from  'classnames';
import PokemonCard from "../../../../../../components/PokemonCard";
import s from "./style.module.css";

const PlayerBoard = ({ cards, onClickCard}) => {
    const [isSelected, setSelected] = useState(null);

    return (
        <>
            {
                cards.map((item) => (
                    <div
                        className={cn(s.cardBoard, {
                            [s.selected]: isSelected === item.id
                        })}
                            onClick={() => {
                                setSelected(item.id);
                                onClickCard && onClickCard(item);
                            }}
                    >
                        <PokemonCard
                            name={item.name}
                            img={item.img}
                            id={item.id}
                            type={item.type}
                            values={item.values}
                            key={item.id}
                            isActive
                            minimize
                        />
                    </div>
                    )
                )}
        </>
    );
};

export default PlayerBoard;