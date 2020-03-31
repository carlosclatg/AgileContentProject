import { array } from "prop-types"



const utils = {

    retrieveFavoritesFromData(arrayFavorites, arrayData){
        if (!Array.isArray(arrayFavorites)) throw TypeError(arrayFavorites + ' is not a array')
        if (!Array.isArray(arrayData)) throw TypeError(arrayData + ' is not a array')

        const arraySimplified = []
        console.log("The data is" + arrayData)
        console.log("The favorites is" + arrayData)
        arrayData.forEach(elem => {
            console.log(elem)
            if(!arrayFavorites.some(fav => fav.name == elem.name)){
                console.log("pushing" + elem)
                arraySimplified.push(elem)
            }
        })

        console.log("arrayData is " + arrayData)
        console.log("arraySimplified is " + arraySimplified)
        console.log("arrayFavorites is " + arrayFavorites)

        return arraySimplified
    }
}


export default utils