import React, { Fragment } from 'react';
import styled from '@emotion/styled';

const Navbar = styled.nav`
    position: fixed;
    width: 100%;
    padding: 30px 0;
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

    span {
        color: crimson;
    }
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
    transition: color 0.3s ease;

    :hover {
        color: crimson;
    }
`;

const Navegation = () => {
    return ( 
        <Fragment>
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

            
        </Fragment>
     );
}
 
export default Navegation;