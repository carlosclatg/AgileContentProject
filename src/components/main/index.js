import React, { useState, useEffect } from 'react';
import logic from '../../logic'

function App1 () {

    const [visible, setVisible] = useState(false);

    useEffect(() => {
      logic.getPeople('r')
        .then(result => {
          console.log('THATS THE RESULT MY FRIEDN')
          console.log(result)
          setVisible(true)
          })
      
    }, []);

    

    if(!visible) return <div><p>Loading Data from API....</p></div>; 
    
    return (
        <div >
          <h1>Hooked CryptoChecker</h1>
        </div>
      );
    }
  
  
  export default App1;