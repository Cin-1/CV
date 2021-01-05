import React, { Fragment } from "react";
import Imagen from "../../images/eccomerce.png";
import styled from "@emotion/styled";

const DivP = styled.div`
  background-color: white;
  padding-bottom: 5%;
  padding-top: 5%;
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
  justify-content: space-around;
  font-family: "Ubuntu", sans-serif;
`;
const SubTitle = styled.h3`
  font-family: "Ubuntu", sans-serif;
  color: black;
  text-align: center;
  margin: 2%;
`;

const DivImg = styled.div`
  margin: 3%;
  background-color: white;
  align-items: center;
  padding: 3%;
  border-radius: 2rem;
  &:hover {
    background-color: crimson;
    cursor: pointer;
  }
`;

const Img = styled.img`
  max-width: 100%;
  border-radius: 2rem;
  border: black 2px solid;
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
        <DivFlex>
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
          <DivImg>
            <SubTitle>Ecommerce</SubTitle>
            <Img src={Imagen} alt="imagen ecommerce" />
            <P>Descripcion del proyecto</P>
          </DivImg>
        </DivFlex>
      </DivP>
    </>
  );
};

export default Proyects;
