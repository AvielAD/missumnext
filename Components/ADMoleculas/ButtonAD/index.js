import Page from './page.js';

const ButtonAD =({Type, Evento, Message, className})=>{

    return(
        <>
            <Page Type={Type} Message={Message} Evento={Evento} className={className}/>
        </>
    )
}

export default ButtonAD;