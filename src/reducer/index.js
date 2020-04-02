

//Estado inicial
const INITIAL_STATE = {
    genderFilter: null
}

//Reducer, se le setea el estado inicial, y se ocupa de generar un nuevo state
export function setGenderFilter(state = INITIAL_STATE, action){
   
    switch (action.type) {
        case 'female' :
            return {
                genderFilter: 'female'
            }

        case 'male' :
            return {
                genderFilter: 'male'
            }

        default : 
          return {
            genderFilter: null
          }
    }
}