import styles from './styles.module.css';

const Page =({Type, OnClick, Evento, Message}) =>{

    return (
        <>
            <button type={Type} className={`${styles.btnGhost} ${styles.missum} ${styles.round}`}>{Message}</button>
        </>
    )
}

export default Page;