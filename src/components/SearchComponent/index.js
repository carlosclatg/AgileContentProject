import React, { useState, useEffect, Fragment } from 'react';
import logic from '../../logic'
import './index.css'

export default function SearchComponent({ setDataToDisplay}){

    const [criteria, setCriteria] = useState();
    const [loading, setLoading] = useState();
    const [error, setError] = useState(false);

    const handleFormSubmit = () => {
        if(criteria.length > 0){
            setLoading(true)
            setError(false) 
            logic.getPeople(criteria)
                .then(result => {
                    setDataToDisplay(result)
                    setLoading(false)  
                }, () => {
                    setLoading(false)
                    setError(true) 
                }) ;

        }
    }


    const handleCriteria = event => {
        setCriteria(event.target.value)
    }
 
    return (
        <div className="searchContainer">
            <div className="searchTitle">
                <h4>Search People</h4>
            </div>
            <form className="field has-addons" onSubmit={handleFormSubmit}>
                <div className="">
                    <input className="input" type="text" placeholder="Find your characters" required value={criteria} onChange={handleCriteria}/>
                </div>
                <div className="buttonContainer">

                        {!loading ?  
                        <button className="button is-info" type="submit">Search</button> 
                        : 
                        <button className="button is-info" type="submit" disabled>Wait...</button> 
                        }
                    {error ? <p>Error retrieving data ...</p> : null}
                </div>
            </form> 
        </div>
    )


}


