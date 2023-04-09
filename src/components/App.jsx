import React, {useState, useEffect} from 'react'
import { Players, PlayerForm, PlayerCard } from './index'
import { fetchAllPlayers } from '../ajaxHelpers';


//(attempted) LOGIC:
//getSinglePlayer function renders the initial view
//when see-details-bttn is clicked, the value of toggle changes in state
//when toggle changes in state <PlayerCard /> runs
//when <PlayerCard /> runs, if toggle is true run <SinglePlayer />
//else if toggle is false, <Players /> runs
//when go-back-bttn is clicked, toggle is changed again and <PlayerCard /> is run again



const App = () => {
    const [players, setPlayers] = useState([]);
    const [toggle, setToggle] = useState(false);


    //what props looks like
    // {
    //     players: [{id: 2 name: crumpet}{...}{...}],
    //     selectedPlayer: [{...}],
    //     toggle: false
    // }



    //getAllPlayers function to be used in useEffect because it needs async/await
    const getAllPlayers = async () => {
        const players = await fetchAllPlayers();
        setPlayers(players); 
    }

    //useEffect to get initial players
    useEffect(() => {
        getAllPlayers();   
    }, [])

    //useEffect to listen for toggle
    useEffect(() => {
        <Players />
    }, [toggle])

 
    return (
    <>
        <PlayerForm />
        <PlayerCard players={players} toggle={toggle}/>
    </>
    )
}

export default App
    