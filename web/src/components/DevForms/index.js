import React, { useState, useEffect } from 'react';

function DevForm({ onSubmit }){

    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    const [github_username, setGitHubUserName] = useState('');
    const [techs, setTechs] = useState('');

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

      async function handleSubmit(e) {
        e.preventDefault();
        await onSubmit({
            github_username,
            techs,
            latitude,
            longitude
        });
        setGitHubUserName('');
        setTechs('');
      }

    return(
        <form onSubmit={handleSubmit} >
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
    );
}

export default DevForm;