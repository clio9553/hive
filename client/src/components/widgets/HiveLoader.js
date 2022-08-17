import React from 'react'
import { HashLoader } from 'react-spinners'
import '../../styles/loader.css'



function HiveLoader({ isFull }) {
    const fullStyle = {
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        rowGap: "30px"
    }
    const smallStyle = {
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        rowGap: "30px"
    }
    return (
        <div className="loader" style={isFull ? fullStyle : smallStyle}>
            <HashLoader />
            <p>Fetching...</p>
        </div>
    )
}

export default HiveLoader
