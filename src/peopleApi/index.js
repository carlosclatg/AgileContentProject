const SWApi = {

    url: 'https://cors-anywhere.herokuapp.com/http://swapi.co/api/',

    getPeople(searchCriteria, arrayPeople, nextPage, resolve, reject){

        let urlFetch;
        if(nextPage == 0) {
            arrayPeople = new Array();
        }
        if(nextPage == 0) urlFetch = `${this.url}people/?search=r12121`;
        else urlFetch = nextPage;
        console.log('before detching')
        return fetch(urlFetch, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            },
        })
        .then(response => {
            if (response.status !== 200)  {
                throw `${response.status}: ${response.statusText}`;
            }
            response.json()
                .then(data => { 
                    arrayPeople = arrayPeople.concat(data.results);
                    console.log(arrayPeople)
                    console.log(data.next)
                    if(data.next) {
                        this.getPeople(null, arrayPeople, data.next, resolve, reject)
                    } else {
                        return resolve(arrayPeople)
                    }
              }).catch(err => console.log(err));
        })
    } 
}

export default SWApi


