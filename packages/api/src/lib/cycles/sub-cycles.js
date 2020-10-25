const { cloneDeep } = require('lodash')
const checkCycles = require('./check-cycles')

module.exports = (graph, cycle) => {
  // initializing set, copy and sub cycle array
  const set = []
  const cycleCopy = cloneDeep(cycle)
  const subCycles = []

  // interating over cycles to extract all sub cycles
  cycle.forEach(({ to }) => {
    // finding if to is aleardy in set
    const prevIdx = set.indexOf(to)

    // pushing to into set
    set.push(to)

    // if to is in set, that means we got a sub cycle, extracting sub cycle
    if (prevIdx !== -1) {
      const potencialCycle = cycleCopy.splice(prevIdx + 1, (set.length - 1) - prevIdx)

      // checking if the sub cycle is actually profitable (in theory it needs to be but who knows)
      const profit = checkCycles(graph, potencialCycle)
      if (profit > 0) subCycles.push({ path: potencialCycle, profit })

      // removing cycle from set
      set.splice(prevIdx + 1)
    }
  })

  // pushing remaining cycle if profitable
  const profit = checkCycles(graph, cycleCopy)
  if (profit > 0) subCycles.push({ path: cycleCopy, profit })

  return subCycles
}
