import React, { useState } from 'react'
import { Button, FormControl, FormGroup, Nav } from 'react-bootstrap'





export const SearchBar = ({ query }) => {

    const [search, setSearch] = useState(" ");
    const [submitted, setSubmitted] = useState(false);


    const handleChange = e => {
        setSearch(e.target.value);
    }

    const handleClick = e => {

        query(search);



    }


    return (

        <Nav style={{ justifyContent: 'center' }}>

            <FormGroup style={{ minWidth: '20%', minHeight: '100%', justifyContent: 'center', display: 'flex' }}>
                <FormControl className="mt-3 my-auto" defaultValue={""} type="search" placeholder="Toronto, CA" style={{
                    paddingLeft: '16px', borderRadius: '16px 2px 16px 2px', border: 'none',
                    outline: 'none', appearance: 'none', boxShadow: '2px 5px rgba(0, 0, 0, 0.2)',
                    fontSize: 'large', scale: '120%'
                }}
                    onChange={handleChange}

                />
                {(search !== undefined && search !== "" && search !== " ") ?
                    <Button className="bg-dark my-auto" style={{
                        backgroundColor: '#282c34', border: 'none', outline: 'none',
                        display: 'inline-flex', marginLeft: '10%', borderRadius: '8px 8px 8px 8px', height: ' 60%'
                    }}
                        onClick={handleClick}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </Button> :
                    <></>}{" "}
            </FormGroup>
        </Nav>

    )
}
