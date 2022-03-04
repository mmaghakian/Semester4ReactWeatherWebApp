import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import { Cards } from './Cards';
import { Paging } from './Paging';
import { SearchBar } from './SearchBar';
//url
const url = "https://api.openweathermap.org/data/2.5/find?&q=";
const urlend = "&type=like&sort=population&units=metric&cnt=50&appid=";



export default class Cities extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: [],
            loading: false,
            currPage: 1,
            perPage: 3,
            done: false,
            search: " "
        }
    }

    query = (cityName) => {

        this.setState({
            search: cityName

        }, () => {
            console.log(this.state.search)
            this.getData();
        });



    }


    header_items = (
        <Container className="mt-5">
            <big><strong>Weather API</strong></big>{" "}<br />
            <SearchBar query={this.query} />
        </Container>
    );

    getData = () => {
        console.log(this.state.search)
        fetch(url + this.state.search + urlend + "7416d767b84b00771ab75affc3604a16")
            .then(res => res.json())
            .then((result) => {
                if (result.list === undefined) {
                    return null;
                }
                const { list } = result;
                var _cards = [];
                for (let i = 0; i < list.length; ++i) {
                    _cards.push(list[i]);
                }
                this.setState({
                    loading: false,
                    cards: list,
                    done: true,
                });
            }).catch((error) => {
                console.error('Error:', error);
            })
            .finally(() => {
                console.log("done. ")

            });
    }
    componentDidMount = () => {
        if (this.props.search === undefined) {

            return null;
        }
        else {
            this.setState({
                loading: true,
                search: this.props.search
            }, () => {
                this.getData();
            });
        }


    }

    render() {

        const indexOfLastCard = this.state.currPage * this.state.perPage;
        const indexOfFirstCard = indexOfLastCard - this.state.perPage;
        const currentCards = this.state.cards.slice(indexOfFirstCard, indexOfLastCard);

        const paging = (pageNumber) => this.setState({
            currPage: pageNumber
        });

        return (
            <header className="App-header">

                <Container className="App-header-container mt-3 mb-5">
                    {this.header_items}
                </Container>

                {(this.state.done && this.state.cards.length > 3) ? <h3 style={{ display: 'flex', marginBottom: '-1%' }}><big>p.{this.state.currPage}</big></h3> : <></>}


                <Paging
                    cardsPerPage={this.state.perPage}
                    totalCards={this.state.cards.length}
                    paging={paging}
                />
                <Cards
                    cards={currentCards}
                    loading={this.state.loading}
                    addToRecents={this.props.addToRecents}

                />

            </header>

        )
    }
}
