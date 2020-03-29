import SWApi from '../peopleApi'


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
    }
    
}


export default logic
