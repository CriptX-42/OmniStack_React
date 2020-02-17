import React from 'react';
import './styles.css'

function DevItem(props) {
    const dev = props;
    return (
        <li  className="dev-item">
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
}

export default DevItem;