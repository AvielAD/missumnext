import React from 'react';
import styles from './style.module.css';
import Link from 'next/link';

const BannerCovid = () => {
    return(
        <>
            <Link href="/covid19"><a className={styles.link}>Novedades Covid19</a></Link>
        </>
    );
}

export default BannerCovid;