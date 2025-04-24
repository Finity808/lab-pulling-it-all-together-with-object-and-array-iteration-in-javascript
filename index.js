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
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
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
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}
/// 1. numPointsScored(playerName)
function numPointsScored(playerName) {
    const game = gameObject();
    for (let teamKey in game) {
      let team = game[teamKey];
      for (let playerKey in team.players) {
        let player = team.players[playerKey];
        if (playerKey === playerName) {
          return player.points;
        }
      }
    }
  }
  
  // 2. shoeSize(playerName)
  function shoeSize(playerName) {
    const game = gameObject();
    for (let teamKey in game) {
      let team = game[teamKey];
      for (let playerKey in team.players) {
        let player = team.players[playerKey];
        if (playerKey === playerName) {
          return player.shoe;
        }
      }
    }
  }
  
  // 3. teamColors(teamName)
  function teamColors(teamName) {
    const game = gameObject();
    for (let teamKey in game) {
      let team = game[teamKey];
      if (team.teamName === teamName) {
        return team.colors;
      }
    }
  }
  
  // 4. teamNames()
  function teamNames() {
    const game = gameObject();
    return Object.values(game).map(team => team.teamName);
  }
  
  // 5. playerNumbers(teamName)
  function playerNumbers(teamName) {
    const game = gameObject();
    for (let teamKey in game) {
      let team = game[teamKey];
      if (team.teamName === teamName) {
        return Object.values(team.players).map(player => player.number);
      }
    }
  }
  
  // 6. playerStats(playerName)
  function playerStats(playerName) {
    const game = gameObject();
    for (let teamKey in game) {
      let team = game[teamKey];
      for (let playerKey in team.players) {
        let player = team.players[playerKey];
        if (playerKey === playerName) {
          return {
            number: player.number,
            shoe: player.shoe,
            points: player.points,
            rebounds: player.rebounds,
            assists: player.assists,
            steals: player.steals,
            blocks: player.blocks,
            slamDunks: player.slamDunks,
          };
        }
      }
    }
  }
  
  // 7. bigShoeRebounds()
  function bigShoeRebounds() {
    const game = gameObject();
    let largestShoeSize = 0;
    let playerWithLargestShoe;
    
    for (let teamKey in game) {
      let team = game[teamKey];
      for (let playerKey in team.players) {
        let player = team.players[playerKey];
        if (player.shoe > largestShoeSize) {
          largestShoeSize = player.shoe;
          playerWithLargestShoe = player;
        }
      }
    }
    
    return playerWithLargestShoe.rebounds;
  }