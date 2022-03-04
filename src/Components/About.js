import React from 'react'
import { Container } from 'react-bootstrap'

export function About() {
    return (
        <header className="App-header">
            <Container className="App-header-container mt-5 mb-3">
                <Container className="mt-4">
                    <big> <strong>About</strong></big>
                    <p style={{color: 'white',  textShadow: '2px 2px rgba(50,50,70, 0.5)'}}>
                        This project was made by Matthew Maghakian using ReactJS and React-Bootstrap<br></br>
                        It was completed on <strong>2022-03-02</strong>
                    </p>
                </Container>
            </Container>
        </header>
    );
}
