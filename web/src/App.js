import React, { useState, useEffect } from 'react';

import './Global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';


function App() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const [github_username, setGitHubUserName] = useState('');
  const [techs, setTechs] = useState('');


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
    e.preventDegaut(){
      
    }
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
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/29991358?s=460&v=4" alt="Ricardo Carvalho"></img>
            </header>
              <div>
                <strong>Ricardo Carvalho</strong>
              </div>
              <span>React, Angular, dotNet</span>

              <p>Apenas um programador</p>
              <a href="https://github.com/CriptX-42">Acessar Perfil no GitHub</a>
          </li>
          
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/29991358?s=460&v=4" alt="Ricardo Carvalho"></img>
            </header>
              <div>
                <strong>Ricardo Carvalho</strong>
              </div>
              <span>React, Angular, dotNet</span>

              <p>Apenas um programador</p>
              <a href="https://github.com/CriptX-42">Acessar Perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/29991358?s=460&v=4" alt="Ricardo Carvalho"></img>
            </header>
              <div>
                <strong>Ricardo Carvalho</strong>
              </div>
              <span>React, Angular, dotNet</span>

              <p>Apenas um programador</p>
              <a href="https://github.com/CriptX-42">Acessar Perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/29991358?s=460&v=4" alt="Ricardo Carvalho"></img>
            </header>
              <div>
                <strong>Ricardo Carvalho</strong>
              </div>
              <span>React, Angular, dotNet</span>

              <p>Apenas um programador</p>
              <a href="https://github.com/CriptX-42">Acessar Perfil no GitHub</a>
          </li>
        
          
        </ul>
      </main>
    </div>
  );
}

export default App;
