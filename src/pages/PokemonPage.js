import React, {useState, useEffect}from 'react';
import axios from 'axios';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-bootstrap';

//Component
import Loader from '../components/Loader';

const PokemonPage = ({match}) => {

    const id = match.params.id;
    console.log(id) 

  return (
    <div>

    </div>
  )
}

export default PokemonPage;