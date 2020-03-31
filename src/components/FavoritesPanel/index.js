import React ,{ Fragment } from "react";
import SimpleCard from "../SimpleCard";


function FavoritesPanel({favorites, removeFromFavorites, showDetails}){

    const handleRemove = (name) => {
        removeFromFavorites(name)
    }

    const handleShowDetails = (name) =>{
        showDetails(name)
    }

    return (

        <Fragment>
            {favorites.length ?
                favorites.map((person) => {
                    return (<SimpleCard person={person} remove = {handleRemove} show= {handleShowDetails}/>)
                })
                :
                <p> No results to display ...</p>           
            }
        </Fragment>

    )


}



export default FavoritesPanel;