import React, { useState, useEffect } from 'react';
import logic from '../../logic'

function App1 () {

    const [count, setCount] = useState(0);
    useEffect(() => {
      logic.getPeople('r')
        .then(result => {
          console.log('THATS THE RESULT MY FRIEDN')
          console.log(result)})
      
    }, []);

    return (
        <div >
          <h1>Hooked CryptoChecker</h1>
        </div>
      );
    }
  
  
  export default App1;