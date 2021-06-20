import React from 'react'
import styled from 'styled-components'
 


const Home = () => {
    return(
        <HomeDiv>
            <h1>Home Page</h1>
        </HomeDiv>
    )
}



export default Home



const HomeDiv = styled.div`
    // border: 1px solid red;
    height: 100vh;
    background: rgba(60,60,60,0.9);
    color: rgba(256,256,256);
`;