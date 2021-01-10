import React from 'react';
import styled from "@emotion/styled";

const AboutTitle = styled.h2`
    position: relative;
    font-family: 'Ubuntu', sans-serif;
    text-align: center;
    font-size: 40px;
    font-weight: 500;
    margin-bottom: 60px;
    padding-bottom: 20px;

    :before {
        content: "";
        position: absolute;
        bottom: 0px;
        left: 50%;
        width: 195px;
        height: 3px;
        background: #111;
        transform: translateX(-50%);
    }

    :after {
        content: "¿Quién soy?";
        position: absolute;
        bottom: -12px; 
        left: 50%;
        font-size: 20px;
        color: crimson;
        padding: 5px;
        background: #fff;
        transform: translateX(-50%);
    }
`;

const AboutGrid = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;

    @media screen and (max-width: 1024px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
`;

const AboutImg = styled.img`
    height: 400px;
    width: 400px;
    object-fit: cover;
    margin-left: 100px;
    border-radius: 6px;

    @media screen and (max-width: 1024px) {
        margin-left: 0;
        margin-bottom: -50px;
    }
`;

const AboutColumnRight = styled.div`
    margin-top: 15%;
    width: 85%;

    @media screen and (max-width: 1024px) {
        margin-bottom: 50px;
    }
`;

const CRTtitle = styled.p`
    font-size: 25px;
    font-weight: 600px;
    margin-bottom: 10px;
    font-family: 'Ubuntu', sans-serif;
`;

const CRSpan = styled.span`
    color: crimson;
`;

const CRText = styled.p`
    font-size: 16px;
    font-family: 'Ubuntu', sans-serif;
    text-align: justify;
`;

const CRBotton = styled.a`
    display: inline-block;
    background: crimson;
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    padding: 10px 30px;
    margin-top: 20px;
    border-radius: 6px;
    border: solid 2px crimson;
    transition: all 0.3s ease;

    :hover {
        color: crimson;
        background: none;
    }

`;

const AboutMe = () => {
    return ( 
        <section>
            <div>
                <AboutTitle>Conóceme</AboutTitle>
                <AboutGrid>
                    <div>
                        <AboutImg src="https://www.onepiecepodcast.com/wp-content/uploads/2016/09/3332296-2395105387-24698.png" alt="" />
                    </div>
                    <AboutColumnRight>
                        <div><CRTtitle>Soy Luffy y soy un <CRSpan>Pirata</CRSpan></CRTtitle></div>
                        <CRText>Lorem ipsum dolor sit amet consectetur adipiscing, elit purus facilisis proin litora tempor arcu, 
                        tortor nisl habitant interdum id.</CRText>
                        <CRBotton href="#">Descargar CV</CRBotton>
                    </AboutColumnRight>
                </AboutGrid>
            </div>
        </section>
     );
}
 
export default AboutMe;