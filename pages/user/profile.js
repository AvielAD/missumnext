import { useEffect, useState} from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import axios from 'axios';
import Cookies from 'cookies';

const Profile = (props) => {
    const router = useRouter()
    
   
    return(
        <>
            <div className="container">
                <p>Panel de usuario</p>
                <div className="col-md-3 bg-missum-grey">
                    perfil de usuario
                </div>
            </div>
        </>
    )
}

export default Profile;