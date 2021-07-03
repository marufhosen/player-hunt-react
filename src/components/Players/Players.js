import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './Player.css';

const Players = (props) => {
    const {name, age, club, releaseClause, url} = props.playersInfo;
    const handlePlayersBtn = props.handlePlayers;
    return (
        <div className="container">
            <div className="img-container">
                <img src={url} alt="" />
            </div>
            <div className="player-details-container">
                <h2>{name}</h2>
                <h3>{club}</h3>
                <p>Age: {age}</p>
                <p>Release Clause: {releaseClause}</p>
                <button onClick={()=>handlePlayersBtn(props.playersInfo)} className="addBtn"><FontAwesomeIcon className="icon" icon={faPlus} />Add Player</button>
            </div>
        </div>
    );
};

export default Players;