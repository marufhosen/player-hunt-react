import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const addedPlayers = props.addedPlayer;

    const totalCost = addedPlayers.reduce((cost, eachPlayer)=> cost = cost + eachPlayer.releaseClause,0);

    return (
        <div>
            <h1>Players Cart</h1>
            <h3>Added Player No: {addedPlayers.length}</h3>
            <h4>Added Player List:</h4>
            {
                addedPlayers.map(apl => <p>{apl.name} - {apl.releaseClause} Million Euro</p>)
            }

            <h3>Total Cost: {totalCost} Million Euro</h3>
        </div>
    );
};

export default Cart;