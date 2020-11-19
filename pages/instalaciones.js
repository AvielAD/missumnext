import Head from 'next/head';
import ImgInstalaciones from './assets/ImgInstalaciones.png';
import Train from './assets/InstaSvg/train.svg';
import Gym from './assets/InstaSvg/gym.svg';
import Recep from './assets/InstaSvg/recep.svg';
import Wifi from './assets/InstaSvg/wifi.svg';
import Pool from './assets/InstaSvg/pool.svg';
import Parking from './assets/InstaSvg/parking.svg';
import Bussines from './assets/InstaSvg/bussines.svg';
import Equip from './assets/InstaSvg/equip.svg';
import Cocina from './assets/cocina1.png';
import Cuadro from './assets/cuadro.svg';
import BannerFAQ from '../Components/BannerFAQ';
import Sillon1 from './assets/sillon1.png';

import api from '../Services/api';

const Instalaciones = ({Video}) => {

    return (
        <>
            <Head>
                <title>Missum - Instalaciones</title>
            </Head>

            <div className="">
                <video className="h-25 w-100" preload="none" controls poster={Cocina}>
                    <source src={`${process.env.NEXT_PUBLIC_API_HOST}${Video.video.url}`} type="video/mp4" />
                </video>
                <p className="h2">Conoce nuestros departamentos</p>
                <img className="" src={Cuadro} alt="cuadro"/>
            </div>

            
        </>
    )
}
Instalaciones.getInitialProps = async (ctx) => {
    const VideoHome = await api.Videos.getVideo(2);
  
    return {
      Video: VideoHome.data,
    }
  }
export default Instalaciones;