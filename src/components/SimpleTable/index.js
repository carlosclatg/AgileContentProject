import React, { useState, useEffect, Fragment } from 'react';

export default function simpleTable({people}){

    return (
        <Fragment>
            <table class="table" >
                <caption>List of characters</caption>
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
                        </tr>)
                    })}
                </tbody>
            </table>
        </Fragment>
    )

}