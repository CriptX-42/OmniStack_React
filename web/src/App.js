import React, { useState } from 'react';

import Header from './Header'


/*
  * *  Componente: Um bloco isolado de HTML, CSS , JS o qual não interfere no restante da aplicação
  * *  Propriedade: Informações que um componente PAi (App.js) passa para o filho (Header.js)
  * *  Estado: Informações mantidas pelo componente (imutabilidade)
*/

function App() {
  
  const [counter, setCounter] = useState(0) 


  function incrementCounter(){
    setCounter(counter + 1)
  }

  return (
    /*
      * *  <></> === Fragment
    */
    <> 
    <Header title="Olá"></Header>
      <h1>Contador: {counter} </h1>
      <button onClick={incrementCounter}>Incrementar</button>
    </>
  );
}

export default App;
