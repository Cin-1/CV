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
`;

const AboutColumnLeft = styled.div`

`;

const AboutImg = styled.img`
    height: 400px;
    width: 400px;
    object-fit: cover;
    margin-left: 100px;
    border-radius: 6px;
`;

const AboutMe = () => {
    return ( 
        <section>
            <div>
                <AboutTitle>Conóceme</AboutTitle>
                <AboutGrid>
                    <AboutColumnLeft>
                        <AboutImg src="https://www.onepiecepodcast.com/wp-content/uploads/2016/09/3332296-2395105387-24698.png" alt="" />
                    </AboutColumnLeft>
                    <div>
                        <div><p>Soy Luffy y soy un <span>Pirata</span></p></div>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit purus facilisis proin litora tempor arcu, 
                        tortor nisl habitant interdum id.</p>
                        <a href="#">Descargar CV</a>
                    </div>
                </AboutGrid>
            </div>
        </section>
     );
}
 
export default AboutMe;