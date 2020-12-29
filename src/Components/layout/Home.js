import React from 'react';
import styled from '@emotion/styled';

const Fondo = styled.section`
    display: flex;
    background: url("https://wallpaperaccess.com/full/915909.jpg") no-repeat center;
    height: 1000px;
    color: #fff;
    min-height: 500px;
    font-family: 'Ubuntu', sans-serif;
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

const Home = () => {
    return ( 
        <Fondo className="fondo">
            <WhoIam>
                <TextContainer>
                    <div><MeText1>Hola, mi nombre es</MeText1></div>
                    <div><MeText2>Monkey D.Luffy</MeText2></div>
                    <div><MeText3>Y soy un <Job>Pirata</Job></MeText3></div>
                </TextContainer>
            </WhoIam>
        </Fondo>
     );
}
 
export default Home;