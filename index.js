// eslint-disable-next-line no-console

// function will return `true` if the lineup provided adheres to rules:

/* 
1) The total salary of all players in a lineup may not exceed $45,000
2) Lineups may not contain more than 2 players from a single team
3) Lineups may not contain more than 3 players from a single game
4) Lineups must contain exactly 3 players with the position of 'OF' 
and must also contain exactly 1 player from each of the following positions: 
'P', 'C', '1B', '2B', '3B', 'SS' */



const filterLineup = (lineup) => {
  return ((Object.is(lineup.teamId, lineup.teamId)))
}


const lineupFunction = (lineup) => {
  // returns false when the lineup include >2 players on a single team
  // if the filter is > 2 players from single team, then return false
  // const gameMap = lineUp.filter(team => lineUp.teamId)

  for (let i = 0; i < lineup.length; i++) {
    return (lineup[i].teamId === lineup[i].teamId))
  }


  const lineup = [{
    id: 1, name: 'Chris Sale', position: 'P', teamId: 12, gameId: 123, salary: 9500
  }, {
    id: 2, name: 'Yadier Molina', position: 'C', teamId: 22, gameId: 115, salary: 2500
  }, {
    id: 3, name: 'Mitch Moreland', position: '1B', teamId: 12, gameId: 123, salary: 2800
  }, {
    id: 4, name: 'Dee Gordon', position: '2B', teamId: 18, gameId: 101, salary: 3200
  }, {
    id: 5, name: 'Manny Machado', position: '3B', teamId: 14, gameId: 134, salary: 3100
  }, {
    id: 6, name: 'Troy Tulowitzki', position: 'SS', teamId: 27, gameId: 126, salary: 3300
  }, {
    id: 7, name: 'Andrew McCutchen', position: 'OF', teamId: 11, gameId: 131, salary: 3800
  }, {
    id: 8, name: 'Bryce Harper', position: 'OF', teamId: 15, gameId: 119, salary: 3800
  }, {
    id: 9, name: 'Mookie Betts', position: 'OF', teamId: 12, gameId: 123, salary: 3600
  }]

  // console.log(filterLineup(lineup))
  console.log(lineupFunction(lineup))
  console.log('here')


  const validateLineup = (lineup) => {
    // returns true when the lineup satisfies all conditions
  }



  // returns false when the lineup includes too many players >2 on single team

  // returns false when the lineup does not have the right number of players at each position

  // returns false when the lineup includes too few players from a single position

  // returns false when the lineup does not include a player from a position

  // returns false when the lineup has a total salary greater than 45000


  module.exports = { validateLineup, lineupFunction, filterLineup }
