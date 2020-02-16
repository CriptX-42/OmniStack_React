import React from 'react';

import Header from './Header'


/*
  * *  Componente: Um bloco isolado de HTML, CSS , JS o qual não interfere no restante da aplicação
  * *  Estado: Informações que um componente PAi (App.js) passa para o filho (Header.js)
  * *  Propriedade: 
*/

function App() {
  return (
    /*
      * *  <></> === Fragment
    */
    <> 
      <Header title="Titulo 1"/>
      <Header title="Titulo 2"/>
      <Header title="Titulo 4"/>
    </>
  );
}

export default App;
