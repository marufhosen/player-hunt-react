import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Players from './components/Players/Players';
import playerData from './data/data.json';
import Cart from './components/Cart/Cart';
import './App.css';

function App() {

  const [players, setPlayers] = useState([]);
  useEffect(()=>{
    setPlayers(playerData);
  },[])

  const [playerCount, setPlayerCount] = useState([]);
  const handlaAddPlayer = (addPlayers) => {
    const newPlayers = [...playerCount, addPlayers];
    setPlayerCount(newPlayers);
  }


  return (
    <div className="App">
      <Header></Header>
      <div className="container">
        <div className="player-details-container">
          {
            players.map(pl => <Players handlePlayers={handlaAddPlayer} key={pl.id} playersInfo={pl}></Players>)
          }
        </div>
        <div className="cart-container">
            <Cart addedPlayer = {playerCount}></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;
