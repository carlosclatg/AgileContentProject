import React, { useState, useEffect, Fragment } from 'react';

function SimpleCard({person}){

    return (
        <Fragment>
            <div className="bookCard" >
                <div className="bookCard__image">
                    <img src="http://facetheforce.today/luke" height="42" width="42"/>
                    <p>{person.name}</p>
                </div>
            </div>
        </Fragment>
    )

}

export default SimpleCard;