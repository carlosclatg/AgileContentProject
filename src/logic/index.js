import SWApi from '../peopleApi'
import { reject } from 'q'


const logic = {

    getPeople(searchCriteria){
        if (typeof searchCriteria !== 'string') throw TypeError(searchCriteria + ' is not a string')
        if (!searchCriteria.trim().length) throw Error('searchCriteria cannot be empty')

        return new Promise((resolve, reject) => {
            SWApi.getPeople(searchCriteria, null, 0, resolve, reject)
        })
        .then(response => {
            return response;
        })
        .catch("error retrieving data")


        // return new Promise((resolve, reject) => {
        //     resolve([
        //         {
        //           "name": "C-3PO",
        //           "height": "167",
        //           "mass": "75",
        //           "hair_color": "n/a",
        //           "skin_color": "gold",
        //           "eye_color": "yellow",
        //           "birth_year": "112BBY",
        //           "gender": "n/a",
        //           "homeworld": "https://swapi.co/api/planets/1/",
        //           "films": [
        //             "https://swapi.co/api/films/2/",
        //             "https://swapi.co/api/films/5/",
        //             "https://swapi.co/api/films/4/",
        //             "https://swapi.co/api/films/6/",
        //             "https://swapi.co/api/films/3/",
        //             "https://swapi.co/api/films/1/"
        //           ],
        //           "species": [
        //             "https://swapi.co/api/species/2/"
        //           ],
        //           "vehicles": [],
        //           "starships": [],
        //           "created": "2014-12-10T15:10:51.357000Z",
        //           "edited": "2014-12-20T21:17:50.309000Z",
        //           "url": "https://swapi.co/api/people/2/"
        //         },
        //         {
        //           "name": "Jek Tono Porkins",
        //           "height": "180",
        //           "mass": "110",
        //           "hair_color": "brown",
        //           "skin_color": "fair",
        //           "eye_color": "blue",
        //           "birth_year": "unknown",
        //           "gender": "male",
        //           "homeworld": "https://swapi.co/api/planets/26/",
        //           "films": [
        //             "https://swapi.co/api/films/1/"
        //           ],
        //           "species": [
        //             "https://swapi.co/api/species/1/"
        //           ],
        //           "vehicles": [],
        //           "starships": [
        //             "https://swapi.co/api/starships/12/"
        //           ],
        //           "created": "2014-12-12T11:16:56.569000Z",
        //           "edited": "2014-12-20T21:17:50.343000Z",
        //           "url": "https://swapi.co/api/people/19/"
        //         },
        //         {
        //           "name": "Yarael Poof",
        //           "height": "264",
        //           "mass": "unknown",
        //           "hair_color": "none",
        //           "skin_color": "white",
        //           "eye_color": "yellow",
        //           "birth_year": "unknown",
        //           "gender": "male",
        //           "homeworld": "https://swapi.co/api/planets/48/",
        //           "films": [
        //             "https://swapi.co/api/films/4/"
        //           ],
        //           "species": [
        //             "https://swapi.co/api/species/25/"
        //           ],
        //           "vehicles": [],
        //           "starships": [],
        //           "created": "2014-12-20T10:34:48.725000Z",
        //           "edited": "2014-12-20T21:17:50.437000Z",
        //           "url": "https://swapi.co/api/people/57/"
        //         },
        //         {
        //           "name": "Poggle the Lesser",
        //           "height": "183",
        //           "mass": "80",
        //           "hair_color": "none",
        //           "skin_color": "green",
        //           "eye_color": "yellow",
        //           "birth_year": "unknown",
        //           "gender": "male",
        //           "homeworld": "https://swapi.co/api/planets/11/",
        //           "films": [
        //             "https://swapi.co/api/films/5/",
        //             "https://swapi.co/api/films/6/"
        //           ],
        //           "species": [
        //             "https://swapi.co/api/species/28/"
        //           ],
        //           "vehicles": [],
        //           "starships": [],
        //           "created": "2014-12-20T16:40:43.977000Z",
        //           "edited": "2014-12-20T21:17:50.453000Z",
        //           "url": "https://swapi.co/api/people/63/"
        //         },
        //         {
        //           "name": "Poe Dameron",
        //           "height": "unknown",
        //           "mass": "unknown",
        //           "hair_color": "brown",
        //           "skin_color": "light",
        //           "eye_color": "brown",
        //           "birth_year": "unknown",
        //           "gender": "male",
        //           "homeworld": "https://swapi.co/api/planets/28/",
        //           "films": [
        //             "https://swapi.co/api/films/7/"
        //           ],
        //           "species": [
        //             "https://swapi.co/api/species/1/"
        //           ],
        //           "vehicles": [],
        //           "starships": [
        //             "https://swapi.co/api/starships/77/"
        //           ],
        //           "created": "2015-04-17T06:55:21.622786Z",
        //           "edited": "2015-04-17T06:55:21.622835Z",
        //           "url": "https://swapi.co/api/people/86/"
        //         }
        //       ])
        // })
    }
    
}


export default logic
