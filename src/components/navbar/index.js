import s from './style.module.css';
import cn from 'classnames';

const Navbar = ({status, onClickButton}) => {
    const handleClick = () => {
        onClickButton();
    }
    return (
        <nav id={s.navbar}>
            <div className={s.navWrapper}>
                <p className={s.brand} onClick={handleClick}>
                    LOGO
                </p>
                <a className={cn(s.menuButton,{[s.active] : status})} onClick={handleClick}>
                    <span/>
                </a>
            </div>
        </nav>
    )
}

export default Navbar;