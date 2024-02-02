/*----- constants -----*/

const sides = {
    1: '&#x2680;',
    2: '&#x2681;',
    3: '&#x2682;',
    4: '&#x2683;',
    5: '&#x2684;',
    6: '&#x2685;',
}


/*----- state variables -----*/
const state = {
    player: '',
    totalPoints: {
        player1: 0,
        player2: 0
    },
    points: 0,
    rolls: []
}


/*----- cached elements  -----*/


/*----- event listeners -----*/


/*----- functions -----*/
const init = function () {
    state.player = 'player1';
    state.totalPoints.player1 = 0;
    state.totalPoints.player2 = 0;
    state.points = 0;
    state.rolls.length = 0; //this would be the only instance where the length should be set
};

init();
console.log(state);