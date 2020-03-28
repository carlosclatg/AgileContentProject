import React, { useState, useEffect } from 'react';
import logic from '../../logic'
import SimpleCard from '../SimpleCard'
import SimpleTable from '../SimpleTable'

function App1 () {

  const [visible, setVisible] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    logic.getPeople('r')
      .then(result => {
        setData(result);
        })
    
  }, []);



  if(!data) return <div><p>Loading Data from API....</p></div>; 

  return (

  <div >
    <h1>Hooked CryptoChecker</h1>
    <SimpleTable people={data}></SimpleTable>
    {/* {data.length>0 && data.map(person => <SimpleCard per={person}></SimpleCard>)} */}
  </div>);
    
}
  
  
  export default App1;