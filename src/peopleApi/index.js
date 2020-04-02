'use strict'

module.exports = SWApi = {

    url: 'https://cors-anywhere.herokuapp.com/http://swapi.co/api/',

    getPeople(searchCriteria, arrayPeople, nextPage, resolve, reject){
        if (typeof searchCriteria !== 'string') throw Error (searchCriteria + ' is not a string')
        if (!searchCriteria.trim().length) throw Error('searchCriteria cannot be empty')

        let urlFetch;
        if(nextPage == 0) {
            arrayPeople = new Array();
        }
        if(!nextPage) urlFetch = `${this.url}people/?search=${searchCriteria}`;
        else urlFetch = nextPage;

        return fetch(urlFetch, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            },
        })
        .then(response => {
            console.log(response.status)
            if (response.status !== 200)  {
                reject(response.status)
            }
            response.json()
                .then(data => { 
                    arrayPeople = arrayPeople.concat(data.results);
                    if(data.next) {
                        this.getPeople(null, arrayPeople, data.next, resolve, reject)
                    } else {
                        return resolve(arrayPeople)
                    }
              }).catch();
        }).catch()
    } 
}

