import React, { Fragment } from "react";
import Imagen from "../../images/eccomerce.png";
import styled from "@emotion/styled";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  ButtonFirst,
  ButtonLast,
  Dot,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const DivP = styled.div`
  background-color: white;
  padding-bottom: 5%;
  padding-top: 5%;
`;
const DivBotton = styled.div`
  position: relative;
  width: 80%;
  left: 0;
  text-align: center;
  margin: auto;
  margin-bottom: -20px;
  z-index: 100;
`;

const Title = styled.h1`
  position: relative;
  font-family: "Ubuntu", sans-serif;
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
    content: "Ejemplos";
    position: absolute;
    bottom: -12px;
    left: 50%;
    font-size: 20px;
    color: crimson;
    padding: 5px;
    background: white;
    transform: translateX(-50%);
  }
`;

const DivFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Ubuntu", sans-serif;
  background-color: beige;
`;
const SubTitle = styled.h3`
  font-family: "Ubuntu", sans-serif;
  color: black;
  text-align: center;
`;

const DivImg = styled.div`
  margin: 2%;
  background-color: rgb(215, 215, 215);
  max-width: 90%fit-content;
  align-items: center;
  padding: 3%;
  border-radius: 2rem;
  &:hover {
    background-color: crimson;
    cursor: pointer;
    transform: scale(1.03);
  }
`;

const Img = styled.img`
  max-width: 100%;
  border-radius: 2rem;
  border: black 3px solid;
  object-fit: cover;
  &:hover {
    border-color: white;
  }
`;
const P = styled.p`
  font-family: "Ubuntu", sans-serif;
  color: black;
  text-align: center;
  margin: 2%;
`;

const Proyects = () => {
  return (
    <>
      <DivP>
        <Title>Mis proyectos</Title>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={2}
        >
          <div>
            <Slider style={{ maxHeight: "280px" }}>
              <Slide index={0}>
                <DivFlex>
                  <DivImg>
                    <a href="https://www.facebook.com/">
                      <SubTitle>Ecommerce</SubTitle>
                      <Img src={Imagen} alt="imagen ecommerce" />
                      <P>Descripcion del proyecto</P>
                    </a>
                  </DivImg>
                  <DivImg>
                    <SubTitle>Ecommerce</SubTitle>
                    <Img src={Imagen} alt="imagen ecommerce" />
                    <P>Descripcion del proyecto</P>
                  </DivImg>
                  <DivImg>
                    <SubTitle>Ecommerce</SubTitle>
                    <Img src={Imagen} alt="imagen ecommerce" />
                    <P>Descripcion del proyecto</P>
                  </DivImg>
                </DivFlex>
              </Slide>
              <Slide index={1}>
                {" "}
                <DivFlex>
                  <DivImg>
                    <a href="https://www.facebook.com/">
                      <SubTitle>Ecommerce</SubTitle>
                      <Img src={Imagen} alt="imagen ecommerce" />
                      <P>Descripcion del proyecto</P>
                    </a>
                  </DivImg>
                  <DivImg>
                    <SubTitle>Ecommerce</SubTitle>
                    <Img src={Imagen} alt="imagen ecommerce" />
                    <P>Descripcion del proyecto</P>
                  </DivImg>
                  <DivImg>
                    <SubTitle>Ecommerce</SubTitle>
                    <Img src={Imagen} alt="imagen ecommerce" />
                    <P>Descripcion del proyecto</P>
                  </DivImg>
                </DivFlex>
              </Slide>
            </Slider>
            <DivBotton>
              <ButtonBack
                style={{
                  height: "13px",
                  width: "13px",
                  margin: "0 5px",
                  outline: "none !important",
                  border: " 5px crimson",
                  borderRadius: "50%",
                  backgroundColor: "black",
                }}
              ></ButtonBack>
              <ButtonNext
                style={{
                  height: "13px",
                  width: "13px",
                  margin: "0 5px",
                  outline: "none !important",
                  border: "crimson",
                  borderRadius: "50%",
                  color: "red",
                  backgroundColor: "black",
                }}
              ></ButtonNext>
            </DivBotton>
          </div>
        </CarouselProvider>
      </DivP>
    </>
  );
};

export default Proyects;
