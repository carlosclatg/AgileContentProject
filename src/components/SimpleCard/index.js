import React, { useState, useEffect, Fragment } from 'react';

export default function simpleCard({per}){

    return (
        <Fragment>
            <div className="bookCard" >
                <div className="bookCard__image">
                    {/* <img src={"http://facetheforce.today/luke"}></img> */}
                    <p>{per.name}</p>
                    <p>{per.height}</p>
                </div>
            </div>
        </Fragment>)

}