import {useState} from 'react';
import Menu from '../menu';
import Navbar from '../navbar';

const MenuHeader = ({ bgActive }) => {
    const [isOpen, setOpen] = useState(null)

    const handleClickHamburg = () => {
        setOpen(prevState => !prevState);
    }
    return (
        <>
            <Menu  isOpen={isOpen} onClickClose={handleClickHamburg}/>
            <Navbar isOpen={isOpen} bgActive={bgActive} onClickHamburg={handleClickHamburg} />

        </>
    );
}

export default MenuHeader;