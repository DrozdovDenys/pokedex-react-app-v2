import React from "react";
import preloader from '../../images/preloader.gif'

let Preloader = () => {
    return (
        <div>
            <img src={preloader} alt="preloader" style={{ width: '100%', height: '100vh', objectFit: 'cover' }} />
        </div>
    )
}

export default Preloader;