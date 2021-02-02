import {useState} from 'react';
import s from './style.module.css';
import Menu from '../menu';
import Navbar from '../navbar';

const MenuHeader = () => {
    const [isActive, setActive] = useState(false)
    const handleClickButton = () => {
        setActive(!(isActive));
    }
    return (
        <>
            <Menu  status = {isActive}/>
            <Navbar status = {isActive} onClickButton={handleClickButton} />

        </>
    );
}

export default MenuHeader;