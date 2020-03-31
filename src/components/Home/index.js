import React, { Fragment, useEffect, useState } from 'react';
import { withRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import utils from '../../utils';
import Container from '../Container';
import FavoritesPanel from '../FavoritesPanel';
import SearchComponent from '../SearchComponent';
import SimpleTable from '../SimpleTable';
import CardDetails from '../CardDetails'
import './index.sass';


function Home(){

  let data = []
  const [dataSimplified, setDataSimplified] = useState([])
  const [favorites, setFavorites] = useState([]);
  const [characterToDisplay, setcharacterToDisplay] = useState();

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
    console.log("inside useEffect of favorites")
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
    let character = dataSimplified.find(elem => elem.name == nameToShow)
    if(character) setcharacterToDisplay(character)
    else{
        character = favorites.find(elem => elem.name == nameToShow)
        setcharacterToDisplay(character)
    }
    
  }

  const resetValues = () => {
    setcharacterToDisplay(null)
  }


  const removeFromFavorites = (name) => {
    let arrayFavorites = favorites.filter(elem => elem.name !== name)
    setFavorites(arrayFavorites)
  }

  const remove = () => {
    setcharacterToDisplay(null)
  }

  

  const theme = {
    font: "Arial",
  }

    return (
        <Fragment>
            <ThemeProvider theme={theme}>
            <div className="firstColumn">
                <Container >
                    <SearchComponent setDataToDisplay={displayResults} resetValues = {resetValues}/>
                    <SimpleTable people = {dataSimplified} saveToFavorites = {saveToFavorites} showDetails = {showDetails}/>
                </Container>
                <Container simple>
                    <div className="favoritesContainer">
                        <FavoritesPanel favorites={favorites} removeFromFavorites = {removeFromFavorites} showDetails = {showDetails}/>
                    </div>
                </Container>
            </div>
            <div className= "secondColumn">
                <Container simple>
                    { characterToDisplay ?
                        <CardDetails person={characterToDisplay} remove={remove}/>
                        :
                        <p>Nothing to display</p>
                    }
                </Container>
            </div>
            </ThemeProvider>
        </Fragment>
        )

}

export default withRouter(Home);