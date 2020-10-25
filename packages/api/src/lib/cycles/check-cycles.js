module.exports = (graph, cycle) => {
  // initializing profit to 1
  let profit = 1

  // going through the path to find out the cycles profit
  cycle.forEach(({ parent, to }) => {
    const { weight } = graph[parent].find((element) => element.to === to) || { weight: 0 }
    profit *= weight
  })

  // returning profit
  return (profit - 1) * 100
}
