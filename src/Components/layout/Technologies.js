import React, { Fragment } from 'react';
import styled from '@emotion/styled';

const TechContainer = styled.div`
    margin-bottom: 100px;
`;

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
    margin-left: 5%;
    width: 80%;

    @media screen and (max-width: 1024px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
`;

const TechList = styled.ul`
    list-style: none;
`;

const ListContainers = styled.div`
    margin-bottom: 30px;
`;

const TechH3 = styled.h3`
    font-size: 24px;
    font-weight: 500;
    font-family: 'Ubuntu', sans-serif;
    margin-bottom: 15px;
`;

const TechText = styled.li`
    font-size: 18px;
    font-weight: 500;
    font-family: 'Ubuntu', sans-serif;
    margin-bottom: 5px;
`;

const TechIconReact = styled.img`
    width: 10%;
    vertical-align: middle;
    margin-right: 5px;
`;

const TechIconRedux = styled.img`
    width: 8%;
    margin-left: 4px;
    margin-right: 10px;
    vertical-align: middle;
`;

const TechIconJS = styled.img`
    width: 7.5%;
    vertical-align: middle;
    margin-right: 10px;
    margin-left: 5px;
`;


const Technologies = () => {
    return ( 
        <Fragment>
            <TechContainer>
                <div>
                    <TechTitle>Tecnologías</TechTitle>
                </div>
                <TechGrid>
                        <ListContainers>
                            <TechH3>Frontend</TechH3>
                            <TechList>
                                <TechText><TechIconReact src="https://www.technoscore.com/images/services/react-js-icon.png"></TechIconReact>React</TechText>
                                <TechText><TechIconRedux src="https://assets.stickpng.com/images/5848309bcef1014c0b5e4a9a.png"></TechIconRedux>Redux</TechText>
                                <TechText><TechIconJS src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"></TechIconJS>JavaScript</TechText>
                                <TechText><TechIconReact src="https://www.estudiocarro.com.ar/imagenes/icon-css.png"></TechIconReact>CSS</TechText>
                                <TechText><TechIconReact src="https://icons.iconarchive.com/icons/cornmanthe3rd/plex/256/Other-html-5-icon.png"></TechIconReact>HTML</TechText>
                            </TechList>
                        </ListContainers>
                        <ListContainers>
                            <TechH3>Backend</TechH3>
                            <TechList>
                                <TechText><TechIconReact src="https://midu.dev/images/tags/node.png"></TechIconReact>Node.js</TechText>
                                <TechText><TechIconReact src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/359/full/expressjslogo.png"></TechIconReact>Express</TechText>
                                <TechText><TechIconReact src="https://ciberseguridadahora.files.wordpress.com/2018/03/mongodb-jpgg.jpg?w=323&h=323"></TechIconReact>MongoDB</TechText>
                                <TechText><TechIconReact src="https://img.icons8.com/color/452/firebase.png"></TechIconReact>Firebase</TechText>
                                <TechText><TechIconReact src="https://image.flaticon.com/icons/png/512/2165/2165004.png"></TechIconReact>API Rest</TechText>
                            </TechList>
                        </ListContainers>
                        <ListContainers>
                            <TechH3>Otros conocimientos</TechH3>
                            <TechList>
                                <TechText><TechIconReact src="https://equinusocio.gallerycdn.vsassets.io/extensions/equinusocio/vsc-material-theme/32.5.0/1581769762885/Microsoft.VisualStudio.Services.Icons.Default"></TechIconReact>VS Code</TechText>
                                <TechText><TechIconReact src="https://mercedesdavila.github.io/img/git.png"></TechIconReact>Git</TechText>
                                <TechText><TechIconReact src="https://mercedesdavila.github.io/img/bootstrap.png"></TechIconReact>Bootstrap</TechText>
                                <TechText><TechIconReact src="https://camo.githubusercontent.com/92ec9eb7eeab7db4f5919e3205918918c42e6772562afb4112a2909c1aaaa875/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313630373535343338352f7265706f7369746f726965732f6e6578742d6a732f6e6578742d6c6f676f2e706e67"></TechIconReact>Next.js</TechText>
                                <TechText><TechIconReact src="https://assets.stickpng.com/thumbs/58480f86cef1014c0b5e493b.png"></TechIconReact>Material UI</TechText>
                            </TechList>
                        </ListContainers>
                    </TechGrid>
                </TechContainer>
        </Fragment>
     );
}
 
export default Technologies;