import React ,{ Fragment } from "react";
import SimpleCard from "../SimpleCard";


function FavoritesPanel({favorites}){


    return (

        <Fragment>
            {favorites.length ?
                favorites.map((person) => {
                    return (<SimpleCard person={person} />)
                })
                :
                <p> No results to display ...</p>           
            }
        </Fragment>

    )


}



export default FavoritesPanel;