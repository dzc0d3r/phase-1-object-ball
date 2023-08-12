

function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1
        }
      }
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12
        }
      }
    }
  };
}


console.log(gameObject());

const gameData = gameObject()

const homeTeamName = () => gameData.home.teamName

console.log(homeTeamName())






const numPointsScored = (name) => {
  for (const team in gameData) {
    return (gameData[team].players[name]) ? gameData[team].players[name].points : "Who's this 🤔 ?"
  }
}

console.log(numPointsScored("Alan Anderson"))
console.log(numPointsScored("Reggie Evans"))
console.log(numPointsScored("Jhon Doe"))


const shoeSize = (name) => {
  for (const team in gameData) {
    return (gameData[team].players[name]) ? gameData[team].players[name].shoe : "Who's this 🤔 ?"
  }

}

const teamColors = (teamName) => {
  if (gameData.home.teamName === teamName) {
    return gameData.home.colors;
  } else if (gameData.away.teamName === teamName) {
    return gameData.away.colors;
  } else {
    return "Team not found"
  }

}

const teamNames = () => [gameData.home.teamName, gameData.away.teamName]

const playerNumbers = (teamName) => {
  const team = gameData.home.teamName === teamName ? gameData.home : gameData.away;
  const playerNames = Object.keys(team.players);

  return playerNames.map(playerName => team.players[playerName].number)
}

const playerStats = function (playerName) {

  for (const team in gameData) {
    if (gameData[team].players[playerName]) {
      return gameData[team].players[playerName]
    }
  }

  return "Player not found";
}

const bigShoeRebounds = () => {
  let largestShoeSize = 0;
  let playerWithLargestShoe = null

  for (const team in gameData) {
    for (const player in gameData[team].players) {
      const playerInfo = gameData[team].players[player]
      if (playerInfo.shoe > largestShoeSize) {
        largestShoeSize = playerInfo.shoe
        playerWithLargestShoe = player
      }
    }
  }

  if (playerWithLargestShoe) {
    return gameData.home.players[playerWithLargestShoe].rebounds ||
      gameData.away.players[playerWithLargestShoe].rebounds

  } else {
    return "No player found";
  }
}

console.log(teamColors("Brooklyn Nets"))
console.log(teamColors("Charlotte Hornets"))
console.log(shoeSize("Jhon Doe"))
console.log(teamNames());
console.log(playerNumbers("away"))
console.log(playerStats("Alan Anderson"))
console.log(bigShoeRebounds())
console.log(shoeSize("Alan Anderson"))
console.log(shoeSize("Reggie Evans"))
console.log(shoeSize("Jhon Doe"))