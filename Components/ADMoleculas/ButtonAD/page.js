import styles from './styles.module.css';

const Page =({Type, Evento, Message, className, Disabled}) =>{
    var style=styles.missum;


    if(Type == "missumT2")
        style=styles.missumT2;
    else if(Type == "missumT3")
        style=styles.missumT4;


    return (
        <>
            <button type="submit" disabled={Disabled} contentEditable={false} className={`${styles.btnGhost} ${style} ${styles.round} ${className}`} onClick={Evento}>{Message}</button>
        </>
    )
}

export default Page;