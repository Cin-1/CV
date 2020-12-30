import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';


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
`;

const ListItems = styled.li`
  list-style: none;
  display: inline-block;
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
`;

const Navegation = () => {

    const [ navbar, setNavbar] = useState(false);

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
                    <List>
                        <ListItems className={ navbar ? 'active3' : null }><Linkerino href="#">Lorem</Linkerino></ListItems>
                        <ListItems className={ navbar ? 'active3' : null }><Linkerino href="#">Lorem</Linkerino></ListItems>
                        <ListItems className={ navbar ? 'active3' : null }><Linkerino href="#">Lorem</Linkerino></ListItems>
                        <ListItems className={ navbar ? 'active3' : null }><Linkerino href="#">Lorem</Linkerino></ListItems>
                        <ListItems className={ navbar ? 'active3' : null }><Linkerino href="#">Lorem</Linkerino></ListItems>
                        <ListItems className={ navbar ? 'active3' : null }><Linkerino href="#">Lorem</Linkerino></ListItems>
                    </List> 
                </NavFlex>
            </NavBar>
            
        </Fragment>
     );
}
 
export default Navegation;