import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { row, Col, Row } from 'react-bootstrap';

//components
import Pokemon from '../components/Pokemon';
import Loader from "../components/Loader";

const Homepage = ({ search, pokemons, loading }) => {

    const [localPokemons, setLocalPokemons] = useState(null)

    const filterPokemons = () => {
        if (search.length > 1) {
            const filteredPokemons = pokemons.filter(pok => pok.data.name.includes(search))
            setLocalPokemons(filteredPokemons);
        } else {
            setLocalPokemons(pokemons)
        }
    }

    useEffect(() => {
        if (pokemons) {
            filterPokemons()
        }
    }, [search, pokemons]);


    return (

        <>
            {/* Om det laddar ser det ut "fetching pokemon" annars ser det ut rad 47*/}
            {loading ? (
                <Loader />
            ) : (

                <Row>
                    {localPokemons && localPokemons.map(p => (

                        <Col key={p.data.name} xs={12} sm={12} md={4} lg={4} xl={4}>
                            <Pokemon pokemon={p.data} />

                        </Col>

                    ))}
                </Row>


            )}

        </>
    )


}

export default Homepage;