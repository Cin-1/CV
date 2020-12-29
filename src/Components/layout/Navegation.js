import React from 'react';
import styled from '@emotion/styled';

const Navbar = styled.nav`
    position: fixed;
    width: 100%;
    background-color: crimson;
    padding: 15px 0;
    font-family: 'Ubuntu', sans-serif;
`;

const NavFlex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const LogoContainer = styled.div`
    max-width: 1300px;
    margin-left: 100px;
`;

const Logo = styled.a`
    color: #fff;
    font-size: 35px;
    font-weight: 600;
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
`;

const Navegation = () => {
    return ( 
        <Navbar>
            <NavFlex>
                <LogoContainer><Logo href="#">Portfo<span>lio.</span></Logo></LogoContainer>
                <List>
                    <ListItems><Linkerino href="#">Lorem</Linkerino></ListItems>
                    <ListItems><Linkerino href="#">Lorem</Linkerino></ListItems>
                    <ListItems><Linkerino href="#">Lorem</Linkerino></ListItems>
                    <ListItems><Linkerino href="#">Lorem</Linkerino></ListItems>
                    <ListItems><Linkerino href="#">Lorem</Linkerino></ListItems>
                    <ListItems><Linkerino href="#">Lorem</Linkerino></ListItems>
                </List> 
            </NavFlex>
        </Navbar>
     );
}
 
export default Navegation;