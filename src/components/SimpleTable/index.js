import React, { useState, useEffect, Fragment } from 'react';
import ScrollableContainer from '../ScrollableContainer';
import './index.sass'

export default function SimpleTable({people, handleShowPerson, handleSavePerson}){

    const handleShow = (event) =>{
        console.log(event.target.value)
    }
    const handleSave = (event) =>{
        console.log(event.target.value)
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
                            <th scope="row">{person.name}</th>
                            <td>{person.gender}</td>
                            <td>{person.birth_year}</td>
                            <td>{person.eye_color}</td>
                            <td>
                                <div>
                                    <button value={person.name} onClick={handleShow}>show details</button>
                                    <button value={person.name} onClick={handleSave}>save</button>
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