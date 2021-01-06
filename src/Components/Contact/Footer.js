import React from "react";
import styled from "@emotion/styled";
import useClipboard from "react-use-clipboard";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import Tooltip from "@material-ui/core/Tooltip";

const Title = styled.h1`
  position: relative;
  font-family: "Ubuntu", sans-serif;
  text-align: center;
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 30px;
  padding-bottom: 20px;
  padding-top: 20px;

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
  position: sticky;
  width: 100%;
  font-family: "Ubuntu", sans-serif;
  background-color: crimson;
`;

const DivFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  padding: 3%;
`;

const Datos = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;
const DivIcon = styled.div`
  margin-top: 5px;
`;
const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

const Parrafo = styled.p`
  color: black;
  margin-top: 5px;
  &:hover {
    color: #dddddd;
    cursor: pointer;
    border-color: #dddddd;
  }
`;
const Link = styled.a`
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
        <Row>
          <Datos>
            <h3>Location</h3>
            <a href="https://www.google.com/maps/place/Hurlingham,+Provincia+de+Buenos+Aires/@-34.5910172,-58.6557366,14z/data=!3m1!4b1!4m5!3m4!1s0x95bcb9254c083df5:0x87b633dca0937bac!8m2!3d-34.589571!4d-58.6275502">
              <Parrafo>Hurlingham Bs As</Parrafo>
            </a>
          </Datos>
          <Datos>
            <h3>Redes</h3>
            <DivIcon>
              <Link href="https://www.linkedin.com/in/cinthia-daira-pardos-0a5ba41b3/">
                <LinkedInIcon style={{ marginRight: "1px" }}></LinkedInIcon>
              </Link>
              <Link href="https://github.com/Cin-1/">
                <GitHubIcon style={{ marginRight: "1px" }}></GitHubIcon>
              </Link>
              <Link href="https://github.com/Cin-1/">
                <WhatsAppIcon></WhatsAppIcon>
              </Link>
            </DivIcon>
          </Datos>
          <Datos>
            <h3>Email</h3>
            <Tooltip title="copy to clipboard">
              <Parrafo onClick={setCopiedE}>{email}</Parrafo>
            </Tooltip>
          </Datos>
        </Row>
      </DivFlex>
    </FooterSty>
  );
};

export default Footer;
