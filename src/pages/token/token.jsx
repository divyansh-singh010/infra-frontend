import { useEffect, useState } from "react";
import axios from "axios";
import { DOMAIN } from "../../../domain";

const Token = () => {
    const token = new URLSearchParams(window.location.search).get('token');
    const [verified, setVerified] = useState(false);

    useEffect(() => {
        axios.get(`${DOMAIN}user/`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        })
            .then(res => {
                localStorage.setItem('user', JSON.stringify(res.data.profile));
                localStorage.setItem('token', token);
                setVerified(true);
                window.location.href = '/dashboard';
            })
            .catch(err => {
                console.log(err);
                setTimeout(() => {
                    window.location.href = '/';
                }, 3000);
            });
    }, [token]);
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20vh', flexDirection: 'column' }}>
            {!verified && <><h1 style={{ fontSize: '2em' }}>You are not authorised!</h1><h2 style={{ fontSize: '1.5rem' }}>Redirecting to home...</h2>
            </>}
        </div>
    );
}

export default Token;
