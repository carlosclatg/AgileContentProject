import React, { useState, useEffect, Fragment } from 'react';
import utils from '../../utils';

function SimpleCard({person, remove, show}){

    const getRandomImage = (url) => utils.getRandomImage(url)

    const handleRemove = (event) =>{
        remove(event.target.value)
    }

    const handleShow = (event) => {
        show(event.target.value)
    }
    

    return (
        <Fragment>
            <div className="personCard" >
                <img className="personCard__image" src={getRandomImage(person.url)} width= "175px" height="175px"/>
                <p>{person.name}</p>
                <button value={person.name} onClick={handleRemove}>Remove</button>
                <button value={person.name} onClick={handleShow}>ShowDetails</button>
            </div>
        </Fragment>
    )

}

export default SimpleCard;