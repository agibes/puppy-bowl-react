import React from 'react'
import { PlayerCard } from './index'



//render the indivual player card
//see-all bttn onClick (I think (if I wasn't trying to use toggle) I would need another key:value for set selected player and on click set the setSelectedPlayer value to an empty object --- then (in another component) if the selectedPlayer object is empty, render all players)
const SinglePlayer = ({players}) => {

    try {
        return (
            <>
            <div id='single-player-view'>
                {players.map((player, index) => {
                    return (
                        <div className = 'single-player-card' key={player.name + index}> 
                        <div className="header-info" >
                        <p className='pup-title'>{player.name}</p>
                        <p className='pup-number'>{player.id}</p>
                        </div>
                        <p>{player.status}</p>
                        <p>{player.breed}</p> 
                        <img src={player.imageUrl} alt="" />
                        <button id="see-all" onClick={() => setToggle(!toggle)}>Back to all players</button>
                        </div>
                    )
                })}
            </div>
            </>
        )
    } catch (error) {
        console.log('single Player error');
    }  
}

export default SinglePlayer;


