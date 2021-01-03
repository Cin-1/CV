import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const NavBar = styled.nav`
    position: fixed;
    width: 100%;
    padding: 30px 0;
    font-family: 'Ubuntu', sans-serif;
    transition: all 0.3s ease;
`;    

const NavFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  max-width: 1300px;
  margin-left: 100px;

  span {
    color: crimson;
  }
`;

const Logo = styled.a`
  color: #fff;
  font-size: 35px;
  font-weight: 600;
`;

const Span = styled.span`
    color: crimson;
`;

const List = styled.ul`
  list-style: none;
  margin-right: 100px;

  @media screen and (max-width: 768px) {
    position: fixed;
    height: 100vh;
    width: 100%;
    left: -100%;
    top: 0;
    background: #111;
    text-align: center;
    padding-top: 80px;
  }
`;

const ListItems = styled.li`
  list-style: none;
  display: inline-block;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const Linkerino = styled.a`
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  margin-left: 25px;
  transition: color 0.3s ease;

  :hover {
    color: crimson; 
  }

  @media screen and (max-width: 768px) {
    display: inline-block;
    margin: 20px 0;
    font-size: 25px;    
  } 
`;

const NavIcon = styled.div`
    color: #fff;
    font-size: 23px;
    cursor: pointer;
    display: none;

  @media screen and (max-width: 768px) {
    display: block;
    z-index: 999;
    margin-right: 50px;
  }
`;

const Navegation = () => {

    const [ navbar, setNavbar] = useState(false);
    const [ toggle, setToggle ] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 20) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return ( 
        <Fragment>
            <NavBar className={ navbar ? 'active' : null }>
                <NavFlex>
                    <LogoContainer><Logo href="#">Portfo<Span className={ navbar ? 'active2' : null }>lio.</Span></Logo></LogoContainer>
                    <List className={ toggle ? 'menu activetoggle' : null }>
                        <ListItems className={ navbar ? 'active3' : null }><Linkerino href="#">Lorem</Linkerino></ListItems>
                        <ListItems className={ navbar ? 'active3' : null }><Linkerino href="#">Lorem</Linkerino></ListItems>
                        <ListItems className={ navbar ? 'active3' : null }><Linkerino href="#">Lorem</Linkerino></ListItems>
                        <ListItems className={ navbar ? 'active3' : null }><Linkerino href="#">Lorem</Linkerino></ListItems>
                        <ListItems className={ navbar ? 'active3' : null }><Linkerino href="#">Lorem</Linkerino></ListItems>
                        <ListItems className={ navbar ? 'active3' : null }><Linkerino href="#">Lorem</Linkerino></ListItems>
                    </List> 
                    <NavIcon>
                      <FontAwesomeIcon
                        onClick={() => setToggle(!toggle)}
                        icon={faBars}
                      />
                    </NavIcon>
                </NavFlex>
            </NavBar>
            
        </Fragment>
     );
}
 
export default Navegation;