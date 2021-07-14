import React from 'react'
import { HashLoader } from 'react-spinners'
import '../../styles/loader.css'
import styled from 'styled-components';

const FullLoader = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
row-gap: 30px`;

const SmallLoader = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
row-gap: 30px`;

function HiveLoader({ isFull }) {
    const style = {}
    return (
        <div className="loader" style={style}>
            {isFull ?
                <FullLoader>
                    <HashLoader />
                    <p>Fetching...</p>
                </FullLoader> :
                <SmallLoader>
                    <HashLoader />
                    <p>Fetching...</p>
                </SmallLoader>}

        </div>
    )
}

export default HiveLoader
