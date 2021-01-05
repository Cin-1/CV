import React from 'react';
import styled from '@emotion/styled';

const Fondo = styled.section`
    display: flex;
    background: url("https://wallpaperaccess.com/full/915909.jpg") no-repeat center;
    height: 1000px;
    color: #fff;
    min-height: 500px;
    font-family: 'Ubuntu', sans-serif;
    margin-bottom: 100px;
`;

const WhoIam = styled.div`
    margin: auto 0 auto 40px;
`;

const TextContainer = styled.div`
    max-width: 1300px;
    margin-left: 100px;
`;

const MeText1 = styled.p`
    font-size: 27px;
`;

const MeText2 = styled.p`
    font-size: 75px;
    font-weight: 600;
    margin-left: -3px;
`;

const MeText3 = styled.p`
    font-size: 40px;
    margin: 5px 0;
`;

const Job = styled.span`
    color: crimson;
    font-weight: 500;
`;

const HireButton = styled.a`
    display: inline-block;
    background: crimson;
    color: #fff;
    font-size: 25px;
    padding: 12px 36px;
    margin-top: 20px;
    border-radius: 6px;
    border: solid 2px crimson;
    transition: all 0.3s ease;

    :hover {
        color: crimson;
        background: none;
    }
`;

const Home = () => {
    return ( 
        <Fondo>
            <WhoIam>
                <TextContainer>
                    <div><MeText1>Hola, mi nombre es</MeText1></div>
                    <div><MeText2>Monkey D.Luffy</MeText2></div>
                    <div><MeText3>Y soy un <Job>Pirata</Job></MeText3></div>
                    <HireButton href="#">Contrátame</HireButton>
                </TextContainer>
            </WhoIam>
        </Fondo>
     );
}
 
export default Home;