import React from 'react'
import { PacmanLoader } from 'react-spinners'
import '../../styles/splash.css'
function Splash() {
    return (
        <div className="splash">
            <div className="column">
                < PacmanLoader color='white' />
                <div className="name">Invesite</div></div>
        </div>
    )
}

export default Splash
