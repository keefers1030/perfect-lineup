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
const validateLineup = (salaryTotal, filterLineup, filterGames, filterPositions) => {
  if (salaryTotal < 45000 && filterLineup === true && filterGames === true && filterPositions === true) {
    return true
  }
  else if (salaryTotal > 45000 || filterLineup === false || filterGames === false || filterPositions === false) {
    return false
  }
}

// 1. The total salary of all players in a lineup may not exceed $45,000
const salaryTotal = lineup.reduce((currentTotal, item) => {
  return item.salary + currentTotal
}, 0)

// 2. Lineups may not contain more than 2 players from a single team
const filterLineup = (lineup) => {
  let teams = []

  for (let i = 0; i < lineup.length; i++) {
    if (lineup[i].teamId === lineup[i++].teamId) {
      teams.push(teams.length)
    } if (teams.length > 2) return false
  }
}

// 3. Lineups may not contain more than 3 players from a single game
const filterGames = (lineup) => {
  let games = []

  for (let i = 0; i < lineup.length; i++) {
    if (lineup[i].gameId === lineup[i++].gameId) {
      games.push(games.length)
    } if (games.length > 3) return false
  }
}

// 4. Lineups must contain exactly 3 players with the position of 'OF' 
// and must also contain exactly 1 player from each of the following positions: 
// 'P', 'C', '1B', '2B', '3B', 'SS'

const filterPositions = (lineup) => {
  let OFCount = lineup.filter(it => it.position.includes('OF'))
  const otherPosition = ['P', 'C', '1B', '2B', '3B', 'SS']

  return (lineup.includes(otherPosition) && (OFCount.length === 3))
}

console.log('Positions (OF and others)')
console.log(filterPositions(lineup))
console.log('No more than 2 players')
console.log(filterLineup(lineup))
console.log('No more than 3 players in single game')
console.log(filterGames(lineup))
console.log('Salary Total')
console.log(salaryTotal)

module.exports = validateLineup
