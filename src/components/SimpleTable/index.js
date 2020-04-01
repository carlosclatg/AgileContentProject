import React from 'react';
import Button from '../Button';
import ScrollableContainer from '../ScrollableContainer';
import './index.sass';

export default function SimpleTable({people, saveToFavorites, showDetails}){

    const handleSaveToFav = (event) =>{
        saveToFavorites(event.target.value)
    }
    const handleShowDetails = (event) =>{
        showDetails(event.target.value)
    }


    return (
        <ScrollableContainer>
            {people.length ?
            <table className="table" >
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Birth Year</th>
                    <th scope="col">Eye Color</th>
                    <th scope="col">Other</th>
                    </tr>
                </thead>
                <tbody>
                    {people.map((person) =>{
                        return(<tr>
                            <th scope="row" className="tableCenter">{person.name}</th>
                            <td className="tableCenter">{person.gender}</td>
                            <td className="tableCenter">{person.birth_year}</td>
                            <td className="tableCenter">{person.eye_color}</td>
                            <td className="tableCenter">
                                <div>
                                    <Button value={person.name} onClick={handleShowDetails}>show details</Button>
                                    <Button value={person.name} onClick={handleSaveToFav}>save</Button>
                                </div>
                            </td>
                        </tr>)
                    })}
                </tbody>
            </table>
            :
            <p>No results to display</p>
            }
        </ScrollableContainer>
    )

}