import layoutStyle from './style.module.css';

const Layout = ({ id, title, descr, urlBg, colorBg }) => {

    const style = {
        backgroundImage: urlBg ? `url(${urlBg})` : 'none',
        backgroundColor: colorBg ? colorBg : 'transparent',
        backgroundColor: colorBg ? colorBg : 'transparent',
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
                    {descr && (<p>{descr}</p>)}
                </div>
            </div>
        </section>
    )
}

export default Layout;