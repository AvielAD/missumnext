import React from 'react';
import styles from './style.module.css';
import Link from 'next/link';

const BannerCovid = () => {
    return(
        <>
            <div className={styles.bannercovidContainer}>
                <div className={styles.bannercovidContent}>
                        <Link href="/covid19"><a className={styles.link}>Novedades Covid19</a></Link>
                </div>
            </div>        
        </>
    );
}

export default BannerCovid;