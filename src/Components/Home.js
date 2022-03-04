import React from 'react'
import { Container } from 'react-bootstrap';
import { GetCity } from './GetCity';

export const getDate = (data) => {

  const months
    = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const days
    = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let day = days[data.getDay()];
  let date = data.getDate();
  let month = months[data.getMonth()];
  let year = data.getFullYear();

  return `${day} ${date} ${month} ${year}`

}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startTime() {

  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();

  m = checkTime(m);
  s = checkTime(s);
  return (h + ":" + m + ":" + s);

}

const header_items = (
  <header className="App-header" style={{ minHeight: 0 }}>
    <Container className="mt-5">
      <big>Hello, welcome to my <strong>Weather API!</strong></big>{" "}
      <br />
      <span style={{ fontSize: '80%' }}>{getDate(new Date())} | Accessed at {startTime()}</span>
      <br></br>

      {" "}

    </Container>
  </header>
);

export const Home = () => {

  //return a fragment
  return (
    <>
      {header_items}
      {<GetCity givenID={6167865} />}


    </>
  )
}

