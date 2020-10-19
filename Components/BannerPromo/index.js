import Promo1 from './assets/bgpromo.png';
import bgRoom from './assets/bgRoom.png';
import bgRoomBed from './assets/bgRoomBed.png';
import styles from './styles.module.css';

const BannerPromo = () => {

    return (
        <>
            <div className="container border">
                <div className="row">
                    
                    <div className="col-sm-12 col-md-6">
                        <img src={Promo1} width="100%" height="100%" alt="promo 1" />
                    </div>

                    <div className="col-md-6">
                        <div className="row justify-content-center">
                            <div className="col-sm-12 col-md-5 col-lg-6 border">
                                <img src={bgRoom} width="100%" height="100%" alt="promo 1" />
                            </div>
                            <div className="col-sm-12 col-md-5 col-lg-6 border">
                                <div className={styles.bannerpromobg}>
                                    <p className="text-center font-weight-bold h5">Promocion </p>
                                    <p className="text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 m-1">
                                <img src={bgRoomBed} width="100%" height="100%" alt="promo 1" />
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
        </>
    )
}

export default BannerPromo;
