import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Container, Accordion, Card, Col, Row } from "react-bootstrap";
//for getting a single city by id
export const GetCity = ({ givenID }) => {

    var message = " ";
    const [city, setCity] = useState({});
    const [pending, setPending] = useState(true);
    const [flagURL, setFlagURL] = useState("");
    const [searchID, setSearchID] = useState(0);
    const { id } = useParams();

    useEffect(() => {

        if (givenID !== undefined)
            setSearchID(givenID);
        else
            setSearchID(id);

        message = (<strong><big>Weather in your City</big></strong>);

        getData();

    }, [])

    useEffect(() => {

        if (givenID === undefined)
            setSearchID(id)
        else
            setSearchID(givenID);

        setPending(true);

        getData();

        setPending(false);

    })
    async function getData() {

        await fetch('http://api.openweathermap.org/data/2.5/weather?id=' + searchID + '&units=metric&appid=[APPID]')
            .then(res => res.json())
            .then(result => {
                if (result.cod === 200) {
                    setFlagURL("http://openweathermap.org/images/flags/" + (result.sys.country).toLowerCase() + ".png");
                    setCity(result);
                }
                setPending(false);
            }).catch((error) => {
                console.error('Error:', error);
            });
    }


    if (city.cod !== 200) {
        if (!pending)
            return null;
        else
            return (
                <header className="App-header">
                    <Container>
                        <big><strong>No Items Found</strong></big>
                    </Container>
                </header>
            );
    }
    else {

        return (

            <header className="App-header">
                <Container className="m-4">
                    {message}
                    <Accordion>
                        <Card className=" bg-dark" style={{ minWidth: '50%', maxWidth: '1000px', display: 'inline-block', position: 'relative' }}>

                            <Card.Header className="bg-info">

                                <Container className="align-left m-0 text-left" style={{ color: '#282c34' }}>
                                    <img
                                        src="https://cdn4.iconfinder.com/data/icons/city-skyline-building-line/32/city_skyline_15-512.png"
                                        width="50"
                                        height="50"
                                        style={{ boxShadow: 'none' }}
                                        className="d-inline-block push-left"
                                        alt="building-icon"
                                    />{" "}
                                    {city.name}, {city.sys.country}
                                </Container>
                            </Card.Header>

                            <Card.Body style={{ backgroundColor: '#282c34' }}>
                                <Container id="card-body-container">
                                    <h1 className="text-left color-blue m-2 mb-3"><img
                                        src={flagURL}
                                        width="32"
                                        height="22"
                                        style={{ boxShadow: 'none' }}
                                        className="d-inline-block my-auto"
                                        alt="card-img"
                                    />
                                        {" "}
                                        {" "}<strong>&nbsp;{city.main.temp}°C</strong></h1>
                                    <h3 className="text-left"><img src={`http://openweathermap.org/img/wn/${city.weather[0].icon}.png`} alt="icon"></img> Feels like: &nbsp;&nbsp;{city.main.feels_like}°c &nbsp;|&nbsp; {city.weather[0].description} </h3>
                                </Container>
                            </Card.Body>

                            <Card.Footer className="bg-dark">
                                <Accordion.Button className="bg-dark text-white">
                                    <h3>+&nbsp;&nbsp;</h3><span>Click to show more</span>
                                </Accordion.Button>
                                <Accordion.Body className="bg-dark">
                                    <Container>
                                        <Row style={{ marginBottom: '10px', textAlign: 'left' }}>
                                            <Col>
                                                <h4><strong>Expected Temp Range: </strong></h4>
                                            </Col>
                                            <Col>
                                                <h4>{city.main.temp_min}°c &nbsp;<strong>To</strong>&nbsp; {city.main.temp_max}°c</h4>
                                            </Col>
                                            <Col>
                                            </Col>

                                        </Row>
                                        <Row style={{ marginBottom: '10px', textAlign: 'left' }}>
                                            <Col>
                                                <h4><strong>Clouds: </strong>&nbsp;&nbsp;{city.weather[0].description}</h4>
                                            </Col>
                                            <Col>
                                                <h4><strong>Humidity: </strong>&nbsp;&nbsp;{city.main.humidity}%</h4>
                                            </Col>
                                            <Col>

                                            </Col>
                                        </Row>
                                        <Row style={{ marginBottom: '10px', textAlign: 'left' }}>
                                            <Col>
                                                <h4><strong>Wind: </strong>&nbsp;&nbsp;{city.wind.speed} m/s</h4>
                                            </Col>
                                            <Col>
                                                <h4><strong>Wind Degree: </strong>&nbsp;&nbsp;{city.wind.deg}°</h4>
                                            </Col>
                                            <Col>
                                            </Col>
                                        </Row>
                                        <Row style={{ marginBottom: '10px', textAlign: 'left' }}>
                                            <Col><h4><strong>Coords: </strong></h4></Col>
                                            <Col><h4><strong>Lat: </strong>{city.coord.lat}</h4></Col>
                                            <Col><h4><strong>Lon: </strong>{city.coord.lon}</h4></Col>
                                        </Row>
                                    </Container>
                                </Accordion.Body>
                            </Card.Footer>
                        </Card>
                    </Accordion >
                </Container >
            </header>
        );

    }
}
