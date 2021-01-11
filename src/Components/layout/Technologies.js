import React, { Fragment } from 'react';
import styled from '@emotion/styled';

const TechTitle = styled.h2`
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
        content: "y conocimientos";
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

const TechGrid = styled.div`
    display: grid;
    grid-template-columns: 33% 33% 33%;
    width: 90%;
    margin-left: 5%;

    @media screen and (max-width: 1024px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
`;

const Technologies = () => {
    return ( 
        <Fragment>
            <div>
                <TechTitle>Tecnologías</TechTitle>
            </div>
            <TechGrid>
                    <div>
                        <h3>Frontend</h3>
                        <ul>
                            <li>React</li>
                            <li>Redux</li>
                            <li>JavaScript</li>
                            <li>CSS</li>
                            <li>HTML</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Backend</h3>
                        <ul>
                            <li>Node.js</li>
                            <li>Express</li>
                            <li>MongoDB</li>
                            <li>Firebase</li>
                            <li>API Rest</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Otros conocimientos</h3>
                        <ul>
                            <li>VS Code</li>
                            <li>Git</li>
                            <li>Bootstrap</li>
                            <li>Next.js</li>
                            <li>Material UI</li>
                        </ul>
                    </div>
                </TechGrid>
        </Fragment>
     );
}
 
export default Technologies;