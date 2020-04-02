import React from 'react';
import utils from '../../utils';
import Button from '../Button';
import './index.sass';

function SimpleCard({person, remove, show}){

    const getRandomImage = (url) => utils.getRandomImage(url)

    const handleRemove = (event) =>{
        remove(event.target.value)
    }

    const handleShow = (event) => {
        show(event.target.value)
    }
    return (
        <div className="personCard" >
            <img className="personCard__image" src={getRandomImage(person.url)} width= "175px" height="175px"/>
            <p>{person.name}</p>
            <div className="personCard__buttonDiv">
                <Button color="primary" value={person.name} onClick={handleRemove} fit="50">Remove</Button>
                <Button color="primary" value={person.name} onClick={handleShow} fit="50">Show Details</Button>
            </div>
        </div>
    )

}

export default SimpleCard;