import React from "react";
import styled from "@emotion/styled";
import useClipboard from "react-use-clipboard";

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
    content: "Extras";
    position: absolute;
    bottom: -12px;
    left: 50%;
    font-size: 20px;
    color: white;
    padding: 5px;
    background: crimson;
    transform: translateX(-50%);
  }
`;

const FooterSty = styled.footer`
  width: 100%;
  padding: 30px 0;
  font-family: "Ubuntu", sans-serif;
  background-color: crimson;
`;

const DivFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-family: "Ubuntu", sans-serif;
`;

const Datos = styled.div`
  margin: 3%;
`;

const Parrafo = styled.p`
  margin-top: 3%;
  color: black;
  &:hover {
    color: #dddddd;
    cursor: pointer;
    border-color: #dddddd;
  }
`;

const Footer = () => {
  const email = "cinthiapardos@gmail.com";
  const cel = "+5411 - 3037 - 5983";
  const [isCopiedE, setCopiedE] = useClipboard(email);
  const [isCopiedC, setCopiedC] = useClipboard(cel);

  return (
    <FooterSty>
      <Title>Otros Datos</Title>
      <DivFlex>
        <Datos>
          <h3>Location</h3>
          <a href="https://www.google.com/maps/place/Hurlingham,+Provincia+de+Buenos+Aires/@-34.5910172,-58.6557366,14z/data=!3m1!4b1!4m5!3m4!1s0x95bcb9254c083df5:0x87b633dca0937bac!8m2!3d-34.589571!4d-58.6275502">
            <Parrafo>Hurlingham Bs As</Parrafo>
          </a>
        </Datos>
        <Datos>
          <h3>Redes</h3>
        </Datos>
        <Datos>
          <h3>Email</h3>
          <Parrafo onClick={setCopiedE}>{email}</Parrafo>
        </Datos>
      </DivFlex>
    </FooterSty>
  );
};

export default Footer;
