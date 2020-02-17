import React, { useState, useEffect } from 'react';
import api from './services/api'

import './Global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';


function App() {
  const [devs, setDevs] = useState([]);

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const [github_username, setGitHubUserName] = useState('');
  const [techs, setTechs] = useState('');

  useEffect(() => {
    async function loadDevs(){
      const response = await api.get('/devs');
      setDevs(response.data);
    }
    loadDevs();
  }, []);

  //dispara uma função toda vez que a informação alterar ou a renderização do componente
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (positon) =>{
        const { latitude, longitude } = positon.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err)
      },
      {
        timeout: 30000,
      }
    )
  }, []);

  async function handleAddDev(e) {
    e.preventDefault();

    const response = await api.post('/devs',{
      github_username,
      techs,
      latitude,
      longitude
    })
    setGitHubUserName('');
    setTechs('');

    setDevs([...devs, response.data]);
  }


  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>

        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input name="github_username" id="github_username" required
            onChange={e => setGitHubUserName(e.target.value)}
            value={github_username}
            />
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="tecs" id="tecs" required 
            onChange={e => setTechs(e.target.value)}
            value={techs}
            />
          </div>
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" value={latitude} 
              onChange={e => setLatitude(e.target.value)}
              required />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" value={longitude} 
              onChange={e => setLatitude(e.target.value)} 
              required />
            </div>
          </div>

          <button type="submit">Enviar</button>
        </form>

      </aside>
      <main>
        
        <ul>
        {devs.map(dev => {
          return(
            <li key={dev.id} className="dev-item">
              <header>
                <img src={dev.avatar_url} alt={dev.name}></img>
              </header>
                <div>
                  <strong>{dev.name}</strong>
                </div>
                <span>{dev.techs.join(', ')}</span>

                <p>{dev.bio}</p>
                <a href={`https://github.com/${dev.github_username}`}>Acessar Perfil no GitHub</a>
            </li>
          )
        })}

        </ul>
      </main>
    </div>
  );
}

export default App;
