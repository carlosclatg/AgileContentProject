import { array } from "prop-types"



const utils = {


    images : ["http://facetheforce.today/luke",
        "http://facetheforce.today/r2d2",
        "http://facetheforce.today/darthvader",
        "http://facetheforce.today/leia",
        "http://facetheforce.today/obiwan",
        "http://facetheforce.today/anakin",
        "http://facetheforce.today/palpatine",
        "http://facetheforce.today/bail",
        "http://facetheforce.today/han",
        "http://facetheforce.today/chewbacca-alt",
        "http://facetheforce.today/darthmaul",
        "http://facetheforce.today/yoda",
        "http://facetheforce.today/rey",
        "http://facetheforce.today/finn",
        "http://facetheforce.today/poe",
        "http://facetheforce.today/bb8",
        "http://facetheforce.today/c3po",
        "http://facetheforce.today/luke"],

    retrieveFavoritesFromData(arrayFavorites, arrayData){
        if (!Array.isArray(arrayFavorites)) throw TypeError(arrayFavorites + ' is not a array')
        if (!Array.isArray(arrayData)) throw TypeError(arrayData + ' is not a array')

        const arraySimplified = []
        arrayData.forEach(elem => {
            console.log(elem)
            if(!arrayFavorites.some(fav => fav.name == elem.name)){
                console.log("pushing" + elem)
                arraySimplified.push(elem)
            }
        })

        return arraySimplified
    },


    getRandomImage(url){
        return this.images[this.getRandomInt(url.substring(27, url.length-1).replace('/', ""))]
    },

    getRandomInt(number) {
        console.log("this is a number" + number)
        console.log("before taking the rest" + number%(this.images.length-1))
        return number%(this.images.length-1)
    },
    
}


export default utils