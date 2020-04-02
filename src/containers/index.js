//Esto crea las connexiones entre Redux y React
import {connect } from 'react-redux'

const mapStateToProps = state => {
  return { genderFilter : state.genderFilter }
  //counter sera la prop
  //state.cuunter sera el valor de la prop
}

//Envio de las acciones
const mapDispatchToProps = dispacth => {
 //cada key llegara como prop al componente.
  return {
    setGenderFilter: (value) => dispacth ({type: value})
  }
}

//
const createConnection = connect(
  mapStateToProps,
  mapDispatchToProps
)


//Determinar el componente quye utilizara todo

const ComponentWithConnectionToRedux = createConnection(Home)

export default ComponentWithConnectionToRedux