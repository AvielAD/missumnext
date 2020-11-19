import styles from './styles.module.css';

const Page =({Type, Evento, Message, className}) =>{
    var style=styles.missum;


    if(Type == "missumT2")
        style=styles.missumT2;
    else if(Type == "missumT3")
        style=styles.missumT4;


    return (
        <>
            <a className={`${styles.btnGhost} ${style} ${styles.round} ${className}`} onClick={Evento}>{Message}</a>
        </>
    )
}

export default Page;