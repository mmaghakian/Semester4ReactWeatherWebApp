import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { NotFound } from './Components/NotFound';
import { About } from './Components/About';
import { Home } from './Components/Home';
import { GetCity } from "./Components/GetCity";
import Cities from "./Components/Cities";
import { Nav_Bar } from './Components/Nav_Bar'
import { Component } from 'react';

const recentMAX = 5;

export class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            recentlyViewed: []
        }
    }

    componentDidMount = async () => {
        const storage = window.localStorage.getItem('weather-recents');
        if (storage !== null)
            this.setState({
                recentlyViewed: JSON.parse("[" + storage + "]")
            }, () => {
                return;
            });

    }

    addToRecents = (id) => {
        let allRecents = this.state.recentlyViewed;

        if (!allRecents.includes(id))
            allRecents.push(id);

        if (allRecents.length > recentMAX) {
            allRecents.shift();
        }

        this.setState({
            recentlyViewed: allRecents
        });

        window.localStorage.setItem('weather-recents', JSON.stringify(allRecents))



    }

    render() {
        return (
            <BrowserRouter>

                <div className="App">
                    <Container id="container-main" >
                        <Container className="NavCon mb-3 my-auto">
                            {<Nav_Bar recentlyViewed={this.state.recentlyViewed} />}{" "}
                        </Container>

                        <Routes>
                            <Route exact path="/" element={<Home />} />
                            <Route exact path="/About" element={<About />} />
                            <Route exact path='/City/:id' element={<GetCity addToRecents={this.addToRecents} />} />
                            <Route exact path='/Search' element={<Cities addToRecents={this.addToRecents} />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>{" "}
                    </Container>
                </div>

            </BrowserRouter >
        );
    }
}

export default App;
