const myGames = [
    { title: 'Monopoly', type: 'board game', numberOfPlayers: '2-8', ratingAmazon: '4.5', shortDescription: 'classic property trading game' },
    { title: 'Uno', type: 'card game', numberOfPlayers: '2-10', ratingAmazon: '4.0', shortDescription: 'classic card game of matching colors and numbers' },
    { title: 'Twister', type: 'party game', numberOfPlayers: '2-4', ratingAmazon: '4.5', shortDescription: 'classic party game that ties you up in knots' }
];
let userResponse = prompt("I have three games in my collection. Please enter a number between 1 and 3 and I'll tell you about that game.");
console.log(userResponse);
let gameNumber = +userResponse;
console.log(gameNumber);
alert('You selected ' + myGames[gameNumber - 1].title + ', which is a ' + myGames[gameNumber - 1].type + ' for ' + myGames[gameNumber - 1].numberOfPlayers + ' players. It has a rating of ' + myGames[gameNumber -1].ratingAmazon + ' stars on Amazon. It is a ' + myGames[gameNumber - 1].shortDescription + '.');
