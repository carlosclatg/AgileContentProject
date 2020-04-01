import React ,{ Fragment, useEffect } from "react";
import SimpleCard from "../SimpleCard";


function FavoritesPanel({favorites, removeFromFavorites, showDetails}){

    const handleRemove = (name) => {
        removeFromFavorites(name)
    }

    const handleShowDetails = (name) =>{
        showDetails(name)
    }

    useEffect(()=>{
        console.log("INSIDE USEEFFECT FAVORITES PANEL")
        console.log(favorites)
    })
    return (

        <Fragment>
            
            {favorites.length ?
                favorites
                    .map((person) => {
                        return (<SimpleCard person={person} remove={handleRemove} show={handleShowDetails} />)
                })
                :
                <p> No results to display ...</p>           
            }
        </Fragment>

    )


}



export default FavoritesPanel;