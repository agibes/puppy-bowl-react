import React from 'react'
import { SinglePlayer, Players } from './index'


//determine which view to display based on value of toggle (toggle's value changes on button click - useEffect listening for changes to toggle - this will rerun everytime toggle is changed)

const PlayerCard = ({toggle}) => {

    if (toggle) {
        return (
            <SinglePlayer />
        );
    } else if (!toggle) {
        return (
            <Players />
        );
    }

}

export default PlayerCard;

