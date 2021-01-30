import s from './style.module.css';
console.log('####: s', s);

const HeaderBlock = ({ title, hideBackground = false, descr }) => {
    const styleRoot = hideBackground ? {backgroundImage: 'none'} : {};
    return (
        <div>
            <div>
                {/*{title ? (<h1 className={s.header}>*/}
                {/*    {title}*/}
                {/*</h1>) : null}*/}
                {
                    title && (<h1 className={s.header}>
                        {title}
                    </h1>)
                }
                {descr && <p>{ descr }</p>}
            </div>
        </div>
    )
}
// const HeaderBlock = (props) => {
//     return (
//         <div>
//             <div>
//                 <h1 className={s.header}>{props.title}</h1>
//                 <p>Simple Triple Triad Card Game</p>
//             </div>
//         </div>
//     )
// }
export default HeaderBlock;