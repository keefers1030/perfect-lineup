let filteredTeams = lineup.map(player => player.teamId)
let uniqueTeams = []
let numberOfUses = []

for (let i = 0; i < filteredTeams.length; i++) {
  const game = filteredTeams[i]

  if (!uniqueTeams.includes(game)) {
    uniqueTeams.push(game)
  }
}

for (let i = 0; i < uniqueTeams.length; i++) {
  const teamId = uniqueTeams[i]

  let numberOfOccurances = filteredTeams.filter(team => team === teamId).length

  numberOfUses.push(numberOfOccurances)
}

if (Math.max(...numberOfUses) > 2) {
  return false
} else {
  return true
}
