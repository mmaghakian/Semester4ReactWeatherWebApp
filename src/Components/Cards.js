import React from 'react'
import { Container, Card, Accordion, Row, Col } from 'react-bootstrap';

export const GetCard = ({ data, addToRecents }) => {

    let city = data;
    let flagURL = "http://openweathermap.org/images/flags/" + (city.sys.country).toLowerCase() + ".png";
    return (
        < Container className="m-3 " >
            <Accordion>

                <Card className=" bg-dark" style={{ minWidth: '60%', maxWidth: '1000px', display: 'inline-block', position: 'relative' }}>
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
                            <h1 className="text-left color-blue"><img
                                src={flagURL}
                                width="32"
                                height="22"
                                style={{ boxShadow: 'none' }}
                                className="d-inline-block my-auto"
                                alt="flag img"
                                id='card-flag-img'
                            />
                                {" "}
                                {" "}<strong>&nbsp;{city.main.temp}°C</strong></h1><br></br>
                            <h3 className="text-left"><img src={`http://openweathermap.org/img/wn/${city.weather[0].icon}.png`} alt="icon"></img> Feels like: &nbsp;&nbsp;{city.main.feels_like}°c &nbsp;|&nbsp; {city.weather[0].description} </h3>
                        </Container>


                    </Card.Body>

                    <Card.Footer className="bg-dark">
                        <Accordion.Button className="bg-dark text-white" onClick={() => addToRecents(city.id)}>
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
    );
}
export const Cards = ({ cards, loading, addToRecents }) => {
    if (loading) {
        return <h1></h1>
    }

    let toShow = [];
    for (let i = 0; i < cards.length; i++) {
        toShow.push(<GetCard data={cards[i]} addToRecents={addToRecents} />);
    }
    return (
        <>{toShow}</>
    );

}

