import React from 'react'
import { ClimbingBoxLoader } from 'react-spinners'
import '../../styles/splash.css'
function Splash() {
    return (
        <div className="splash">
            <div className="column">
                <ClimbingBoxLoader color='white' />
                <div className="name">Hive</div></div>
        </div>
    )
}

export default Splash
