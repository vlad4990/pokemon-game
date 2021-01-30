import headerStyle from './style.module.css';

const Header = ({ title, descr }) => {
    return (
        <header className={headerStyle.root}>
            <div className={headerStyle.forest}></div>
            <div className={headerStyle.container}>
                {
                    title && (<h1>
                        { title }
                    </h1>)
                }
                {
                    descr && (<p>
                        {descr}
                    </p>)
                }
            </div>
        </header>
    )
}

export default Header;