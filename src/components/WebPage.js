import React from 'react';
import CarsList from '../conteiners/cars-list'
import Details from '../conteiners/details'

const WebPage = () => 
(
    <div>
        <h2>Cars:</h2>
        <CarsList/>
        <hr/>
        <h3>Details:</h3>
        <Details />
    </div>
);

export default WebPage;