import React, { useState } from 'react'
import { Nav, Navbar, Container, NavDropdown, NavLink, FormControl, Button } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { LinkContainer } from 'react-router-bootstrap';

export const Nav_Bar = ({ recentlyViewed }) => {
    const [list, setList] = useState([]);
    const [searchid, setSearchid] = useState();

    const handleChange = (e) => {
        setSearchid(e.target.value);
    }

    return (
        <Navbar className="Navbar navbar-expand-sm bg-dark my-auto">

            <Container className="bg-dark flex-grow-0 justify-content-start">

                <Nav className="bg-dark">
                    <NavLink href="/Search">
                        <img
                            src="https://www.pngrepo.com/png/88081/512/rain.png"
                            width="30"
                            height="30"
                            className="d-inline-flex align-top my-auto"
                            alt="icon"
                        /></NavLink>
                    <NavLink id="navText" href="/">
                        Home
                    </NavLink>

                    <NavLink id="navText" href="/About" className="hidden-xs">
                        About
                    </NavLink>

                    <NavLink id="navText" href="/Search">
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search my-auto" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg><span className="hidden-sm"> Search</span>
                        </>
                    </NavLink>

                    <NavDropdown className="bg-dark " title="Recently Viewed" id="navText" onClick={() => {
                        setList(recentlyViewed);
                    }}>

                        {
                            list.length > 0 ? list.map((id, index) => (
                                <NavLink>
                                    <Nav.Item>
                                        <LinkContainer to={`/City/${id}`} key={id}>

                                            <span>City: {id}</span>

                                        </LinkContainer>
                                    </Nav.Item>
                                </NavLink>

                            )) : <NavDropdown.Item> <strong>. . .</strong> </NavDropdown.Item>
                        }{" "}
                    </NavDropdown>

                </Nav>

            </Container>

            <Container className="justify-content-end bg-dark mr-auto ml-auto flex-grow-0" id="search-header-container">

                <Nav className="bg-dark my-auto " id="navText">
                    <label className="my-auto m-1 hidden-sm" >Search: </label><input className="NavInput" type="search" placeholder="City ID"
                        onChange={handleChange}
                        style={{ overflow: 'hidden', backgroundColor: 'rgba(0,0,0, 0.3)', boxShadow: 'none', color: 'white', padding: '2%' }}
                    />
                    {(searchid !== undefined && searchid !== "") ? <Button type="button" className="btn btn-primary bg-dark my-auto" href={"/City/" + searchid} style={{ backgroundColor: '#282c34', border: 'none' }}>    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg></Button> : <></>}



                </Nav>

            </Container>

        </Navbar >
    )
}
