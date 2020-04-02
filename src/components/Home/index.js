import React, { Fragment, useEffect, useState } from 'react';
import { withRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import utils from '../../utils';
import Button from '../Button';
import CardDetails from '../CardDetails';
import Container from '../Container';
import FavoritesPanel from '../FavoritesPanel';
import SearchComponent from '../SearchComponent';
import SimpleTable from '../SimpleTable';
import './index.sass';


function Home(){

  const [data, setData] = useState([])
  const sex = [null, 'male', 'female'];
  const [criteria, setCriteria] = useState();
  const [dataSimplified, setDataSimplified] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [characterToDisplay, setcharacterToDisplay] = useState(null);
  const [genderFilter, setGenderFilter] = useState(sex[0]);

  const displayResults = (dataRetrieved, criteria) => {
      if(dataRetrieved.length){
        setData(dataRetrieved)
        let arraySimplified = utils.retrieveFavoritesFromData(favorites, dataRetrieved)
        setDataSimplified(arraySimplified)
      } else {
          data = []
      }
      setCriteria(criteria)
  }

  useEffect(()=>{
    let dataSimplified2 = []
    dataSimplified2 = data.filter(item => {
      return item.name.toLowerCase().includes(criteria.toLowerCase())
    });
    if(favorites.length){ //case some favs
      setDataSimplified(dataSimplified2.filter(item => !favorites.includes(item)))
    } else{ //case no favs
      setDataSimplified(dataSimplified2)
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

  const filterSelection = (event) => { 
    setGenderFilter(event.target.value)
  }

  

  const theme = {
    font: "Arial",
  }

    return (
        <Fragment>
            <ThemeProvider theme={theme}>
            <div className="firstColumn">
                <Container height="57">
                    <SearchComponent setDataToDisplay={displayResults} resetValues = {resetValues}/>
                    <SimpleTable people = {dataSimplified} saveToFavorites = {saveToFavorites} showDetails = {showDetails}/>
                </Container>
                <Container height="40" >
                  <div> 
                    <p className="savedPeople">Saved People</p>
                    <div className="myBtnContainer">
                        <Button color={!genderFilter ? "primary" : "primaryUnselected"} onClick={filterSelection}>All</Button>
                        <Button color={genderFilter == sex[1] ? "primary" : "primaryUnselected"} value="male" onClick={filterSelection}>Male</Button>
                        <Button color={genderFilter == sex[2] ? "primary" : "primaryUnselected"} value="female" onClick={filterSelection}>Female</Button>
                    </div>
                  </div>
                  <div className="favoritesContainer">
                    <FavoritesPanel favorites={favorites.filter(f => !genderFilter ? true : f.gender == genderFilter)} removeFromFavorites = {removeFromFavorites} showDetails = {showDetails}/>
                  </div>
                </Container>
            </div>
            {
              characterToDisplay ?
                <div className="secondColumn">
                    <Container height="99">
                      <CardDetails person={characterToDisplay} remove={remove}/>
                    </Container>
                </div>
                :
                <div className="secondColumn secondColumn__empty">
                    <Container height="99">
                      <p>Nothing to display</p>
                    </Container>
                </div>
              }
            </ThemeProvider>
        </Fragment>
        )

}

export default withRouter(Home);