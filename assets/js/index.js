// update the rosters based on the saved roster data
const updateRosters = () => {
    // if there's a roster saved in localstorage, get the data
    // update the rosters
};

// detect user clicks and run appropriate function
const handleClick = (e) => {
    e.preventDefault();

    if (e.target.id === 'increase' || e.target.id === 'decrease' ) {
        // if the user clicked the increase or decrease buttons, run the function to change the slots number
        const action = e.target.id;
        changeIntlSlotsNumber(action);
    } else if (e.target.id === 'reset-btn') {
        // if the user clicked the Clear Form button, clear the form
    } else if (e.target.className === 'clear-btn') {
        // if the user clicked a clear button on a roster, delete that player's info
    } else if (e.target.id ==='submit-btn') {
        // if the user clicked the Add Player button, add player to roster
    }
};

// clear a player from the rosters
const clearRosterSlot = (slotNum) => {
    // find the player by their slot number
    // remove the player
    // post to localstorage
    // update the rosters
};

// change the number of international spots
const changeIntlSlotsNumber = (action) => {
    // update the roster data with the number of international slots
    // post new roster data to localstorage
    // update the rosters
};

// add a player to the rosters
const addPlayer = () => {
    // check to make sure there is form data
    // validate form data?
    // add the new player's data to the roster data
    // post the roster data to localstorage
    // update the rosters
};

// user clicks Clear Player Form
const clearAddForm = () => {
    // reset the form fields
};

// check localstorage for saved roster data on page load
// updateRosters();