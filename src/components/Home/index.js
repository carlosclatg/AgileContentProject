import React, { useState, useEffect, Fragment } from 'react';
import { Route, Router, Redirect, withRouter, Switch  } from "react-router-dom";
import SearchComponent from '../SearchComponent'
import logic from '../../logic'
import SimpleTable from '../SimpleTable';
import { ThemeProvider } from "styled-components"
import Container from '../Container';
import './index.css'

function Home(){

  const [data, setData] = useState([]);

  const displayResults = (dataRetrieved) => {
      setData(dataRetrieved)
  }

  

  const theme = {
    font: "Arial",
  }

    return (
        <div className="searchContainer">
            <ThemeProvider theme={theme}>
                <Container simple>
                    <SearchComponent setDataToDisplay={displayResults} />
                </Container>
                <SimpleTable people = {data} />
            </ThemeProvider>
        </div>)

}

export default withRouter(Home);