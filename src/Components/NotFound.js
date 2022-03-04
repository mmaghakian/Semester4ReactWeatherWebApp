import React from 'react'
import { Container } from 'react-bootstrap'

export const NotFound = () => {
    return (
        <div className="App-header">
            <Container className="my-auto">

                <img src="https://cdn.iconscout.com/icon/free/png-256/404-page-not-found-456876.png" className="my-auto" style={{ width: '120px', height: '120px', boxShadow: 'none' }} alt="404">
                </img>
                <Container className="my-auto">
                    <big style={{ color: 'lightblue' }}>Page Not Found <strong>:(</strong></big>
                </Container>
            </Container>
        </div>
    )
}

