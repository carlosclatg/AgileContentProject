import React, { useState, useEffect, Fragment } from 'react';
import { Route, Router, Redirect, withRouter, Switch  } from "react-router-dom";
import SearchComponent from '../SearchComponent'
import logic from '../../logic'
import SimpleTable from '../SimpleTable';
import { ThemeProvider } from "styled-components"
import FavoritesPanel from '../FavoritesPanel'
import Container from '../Container';
import './index.css'
import utils from '../../utils'


function Home(){

  let data = []
  const [dataSimplified, setDataSimplified] = useState([])
  const [favorites, setFavorites] = useState([]);
  const [characterToDisplay, setcharacterToDisplay] = useState([]);

  const displayResults = (dataRetrieved) => {
      if(dataRetrieved.length){
          data = dataRetrieved
          let arraySimplified = utils.retrieveFavoritesFromData(favorites, dataRetrieved)
          setDataSimplified(arraySimplified)
      } else {
          data = []
      }
  }


  useEffect(()=>{
    if(favorites.length){
        setDataSimplified(dataSimplified.filter(item => item.name !== favorites[favorites.length - 1]))
    }
  }, [favorites])

  const saveToFavorites = (nameToAdd) => { 
    let newArrOfFavs = [...favorites];
    const elemToAdd = dataSimplified.find(elem => elem.name == nameToAdd)
    newArrOfFavs.push(elemToAdd)
    setFavorites(newArrOfFavs)
    setDataSimplified(dataSimplified.filter(item => item.name !== elemToAdd.name))
  }

  const showDetails = (nameToShow) => {
      console.log(nameToShow)
  }

  

  const theme = {
    font: "Arial",
  }

    return (
        <Fragment>
            <div className="searchContainer">
                <ThemeProvider theme={theme}>

                    <Container simple>
                        <SearchComponent setDataToDisplay={displayResults} />
                    </Container>
                    <SimpleTable people = {dataSimplified} saveToFavorites = {saveToFavorites} showDetails = {showDetails}/>
                </ThemeProvider>
            </div>
            <div className="favoritesContainer">
                <FavoritesPanel favorites={favorites}/>
            </div>
        </Fragment>
        
        
        
        )

}

export default withRouter(Home);