import React, { useState, useEffect, Fragment } from 'react';
import utils from '../../utils'

function CardDetails({person, remove}){

    const getRandomImage = (url) => utils.getRandomImage(url)

    const removeFav = () => remove()
    

    return (
        <Fragment>
            <div className="bookCard" >
                <div className="bookCard__image">
                    <img src={getRandomImage(person.url)} height="42" width="42"/>
                    <p>{person.name}</p>
                    <p>{person.height}</p>
                    <p>{person.mass}</p>
                    <p>{person.hair_color}</p>
                    <p>{person.skin_colorass}</p>
                    <p>{person.eye_color}</p>
                    <p>{person.birth_year}</p>
                    <p>{person.gender}</p>
                    <button className="button is-info" onClick={removeFav}>OK</button>
                </div>
            </div>
        </Fragment>
    )

}

export default CardDetails;