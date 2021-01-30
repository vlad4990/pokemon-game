import layoutStyle from './style.module.css';

const Layout = ({ id, title, urlBg, colorBg, children }) => {

    const style = {
        backgroundImage: urlBg ? `url(${urlBg})` : 'none',
        backgroundColor: colorBg ? colorBg : 'transparent'
    }

    return (
        <section className={layoutStyle.root}
                 id={id}
                 style={style}
        >
            <div className={layoutStyle.wrapper}>
                <div className={layoutStyle.title}>
                    {title && (<h3>{title}</h3>)}
                    <span className={layoutStyle.separator}></span>
                </div>
                <div className={layoutStyle.desc + ' ' + layoutStyle.full}>
                    {children}
                </div>
            </div>
        </section>
    )
}

export default Layout;