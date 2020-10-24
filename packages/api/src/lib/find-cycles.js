const { cloneDeep } = require('lodash')

module.exports = (n, start) => {
  // deep copy nodes
  const nodes = cloneDeep(n)
  // console.log({n, start})

  // initializaion of parent and dist dicts
  const p = {}
  const d = {}

  Object.keys(nodes).forEach((node) => {
    d[node] = -Infinity
    p[node] = []
  })

  d[start] = 1
  p[start] = [{
    parent: start,
  }]

  // edges initialization
  const edges = nodes[start]

  // clear nodes[]
  nodes[start] = []

  // starting algorithms
  while (edges.length) {
    const edge = edges.pop()
    const {
      to, from, weight, bank,
    } = edge

    if (d[to] < (d[from] * weight)) {
      d[to] = (d[from] * weight)
      p[to].push({
        parent: from,
        bank,
        to,
      })
    }
    edges.unshift(...(nodes[to] || []))
    nodes[to] = []
  }

  // starting to try and reconstact path
  let parent = p[start].pop()

  // return nothing if no path
  if (parent.parent === start) {
    return {
      path: [],
      profit: 0,
    }
  }

  // reconstacting path
  const path = [parent]
  while (parent.parent !== start) {
    parent = p[parent.parent].pop()
    path.unshift(parent)
  }

  return {
    path,
    profit: ((d[start] - 1) * 100),
  }
}
