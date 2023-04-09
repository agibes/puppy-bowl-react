// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = '2303-ftb-et-web-ft';
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;


export const fetchAllPlayers = async () => {
    try {
        const getPlayerAPI =  await fetch(`${APIURL}players`);
        const result = await getPlayerAPI.json();
        //console.log(result);
        return result.data.players;
    } catch (error) {
        console.log('error');
    }
};


//I dont use this one either, but I think I should've
export const fetchSinglePlayer = async (playerId) => {
    try {
        const response = await fetch(`${APIURL}players/${playerId}`);
        let result = await response.json();
        if (result.error) {
            throw result.error;
        }
        return result.data.player;
    } catch (error) {
        console.log(`${error} failed to fetch single player`);
    }
};


//Code I did not use:

// export const addNewPlayer = async (playerObj) => {
//     try {
//         const response = await fetch(`${APIURL}players`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(playerObj),
//         });
//         let result = await response.json();
//         if (result.error) {
//             throw result.error;
//         }
//         return result.data.newPlayer; 
//     } catch (error) {
//         console.log(`${error} failed to add a new player`);
//     }

// };

// export const removePlayer = async (playerId) => {

// };
