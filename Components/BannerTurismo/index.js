import { useState } from 'react';
import styles from './styles.module.css';

const BannerTurismo =(props)=>{

    const [ Tab, setTab ] = useState(true);
    const [ Tab2, setTab2 ] = useState(false);

    function toggleBox(){
        if(!Tab){
            setTab(true)
            setTab2(false)
        }
    }

    function toggleBox2(){
        if(!Tab2){
            setTab2(true)
            setTab(false)
        }
    }
    return(
        <>
            <button onClick={toggleBox} className={Tab ? styles.tagColor : styles.tagColorText}> Equipamiento </button>
            <button onClick={toggleBox2} className={Tab2 ? styles.tagColor : styles.tagColorText}> Turismo </button>

            <div className={Tab ? styles.boxVisible : styles.boxNovisible}>
                <p> Seccion Oculta Equipamiento </p>
            </div>

            <div className={Tab2 ? styles.boxVisible : styles.boxNovisible}>
                <p> Seccion Oculta Turismo </p>
            </div>

        </>
    )
}

export default BannerTurismo;