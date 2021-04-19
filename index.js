const lineup = [{
  id: 1, name: 'Chris Sale', position: 'P', teamId: 12, gameId: 123, salary: 9500
}, {
  id: 2, name: 'Yadier Molina', position: 'C', teamId: 22, gameId: 115, salary: 2500
}, {
  id: 3, name: 'Luke Voit', position: '1B', teamId: 20, gameId: 115, salary: 2800
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

// returns true when the lineup satisfies all conditions
const validateLineup = (lineup) => {
  if (lineup.length === 9 &&
    salaryTotal(lineup) <= 45000 &&
    filterLineup(lineup) === true &&
    filterGames(lineup) === true &&
    filterPositions(lineup) === true) {
    return true
  } else {
    return false
  }
}

// 1. The total salary of all players in a lineup may not exceed $45,000
const salaryTotal = (lineup) => {
  return lineup.reduce((currentTotal, item) => {
    return item.salary + currentTotal
  }, 0)
}

// 2. Lineups may not contain more than 2 players from a single team
const filterLineup = (lineup) => {
  let lineupIds = lineup.map(player => player.teamId)
  let uniqueIds = []
  let numberOfUses = []

  lineupIds.forEach(teamId => {
    if (!uniqueIds.includes(teamId)) {
      uniqueIds.push(teamId)
    }
  })

  uniqueIds.forEach(uniqueId => {
    let count = lineupIds.filter(teamId => teamId === uniqueId).length

    numberOfUses.push(count)
  })

  if (Math.max(...numberOfUses) <= 2) {
    return true
  } else {
    return false
  }
}


// 3. Lineups may not contain more than 3 players from a single game
const filterGames = (lineup) => {
  let individGameID = lineup.map(game => game.gameId)
  let uniqueGameId = []
  let numberOfGames = []

  individGameID.forEach(gameId => {
    if (!uniqueGameId.includes(gameId)) {
      uniqueGameId.push(gameId)
    }
  })

  uniqueGameId.forEach(uniqueId2 => {
    let count = individGameID.filter(gameId => gameId === uniqueId2).length

    numberOfGames.push(count)
  })

  if (Math.max(...numberOfGames) <= 3) {
    return true
  } else {
    return false
  }
}
// 4. Lineups must contain exactly 3 players with the position of 'OF' 
// and must also contain exactly 1 player from each of the following positions: 
// 'P', 'C', '1B', '2B', '3B', 'SS'

const filterPositions = (lineup) => {
  let OFCount = lineup.filter(it => it.position.includes('OF'))
  const otherPosition = ['P', 'C', '1B', '2B', '3B', 'SS']

  return (OFCount.length === 3)
}

console.log('Validate Lineup')
console.log(validateLineup(lineup))
console.log('Salary Total')
console.log((salaryTotal(lineup)))
console.log('No more than 2 players')
console.log(filterLineup(lineup))
console.log('No more than 3 players in single game')
console.log(filterGames(lineup))
console.log('Positions (OF and others)')
console.log(filterPositions(lineup))

module.exports = validateLineup
