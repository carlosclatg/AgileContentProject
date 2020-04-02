import React from 'react';
import utils from '../../utils';
import './index.sass';

function CardDetails({person, remove}){

    const getRandomImage = (url) => utils.getRandomImage(url)

    const removeFav = () => remove()
    

    return (

            <div className="bookCard" >
                <div className="bookCard__content">
                    <div className="bookCard__title"><p>Information about...</p></div>
                    <img src={getRandomImage(person.url)}  />
                    <div className="bookCard__feature bookCard__feature-big"><p>{person.name}</p></div>
                    <div className="bookCard__feature"><p className="bookCard__featureName">height :</p><p>{person.height}</p></div>
                    <div className="bookCard__feature"><p className="bookCard__featureName">mass: </p><p>{person.mass}</p></div>
                    <div className="bookCard__feature"><p className="bookCard__featureName">hair_color: </p><p>{person.hair_color}</p></div>
                    <div className="bookCard__feature"><p className="bookCard__featureName">skin_colorass: </p><p>{person.skin_colorass}</p></div>
                    <div className="bookCard__feature"><p className="bookCard__featureName">eye_color: </p><p>{person.eye_color}</p></div>
                    <div className="bookCard__feature"><p className="bookCard__featureName">birth_year: </p><p>{person.birth_year}</p></div>
                    <div className="bookCard__feature"><p className="bookCard__featureName">gender: </p><p>{person.gender}</p></div>
                    <button className="button is-info" onClick={removeFav}>OK</button>
                </div>
            </div>
        
    )

}

export default CardDetails;