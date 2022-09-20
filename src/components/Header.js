import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Container } from 'react-bootstrap';
import Search from './Search';

const Header = ({ setSearch }) => {
    return (

        <header>
            <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>Pokemons</Navbar.Brand>
                    </LinkContainer>
                    <Search setSearch={setSearch} />
                </Container >
            </Navbar>
        </header>



    )
}

export default Header;