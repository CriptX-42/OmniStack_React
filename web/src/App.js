import React, { useState, useEffect } from 'react';
import api from './services/api'

import './Global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevItem from './components/DevItem';
import DevForm from './components/DevForms';

function App() {
  const [devs, setDevs] = useState([]);

  

  useEffect(() => {
    async function loadDevs(){
      const response = await api.get('/devs');
      setDevs(response.data);
    }
    loadDevs();
  }, []);

  //dispara uma função toda vez que a informação alterar ou a renderização do componente
 

  async function handleAddDev(data) {

    const response = await api.post('/devs',{data});

    setDevs([...devs, response.data]);
  }


  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main>
        
        <ul>
        {devs.map(dev => {
          return(
            <DevItem key={dev.id} dev={dev}/>
          )
        })}

        </ul>
      </main>
    </div>
  );
}

export default App;
