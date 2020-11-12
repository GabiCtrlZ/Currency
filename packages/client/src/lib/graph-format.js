let counter = 1

export default (path) => {
  if (!path.length) return null

  const nodes = {}

  const addFunctions = (key) => {
    if (!nodes[key]) {
      nodes[key] = {
        id: counter++,
        label: key,
      }
    }
    return nodes[key]
  }

  const edges = path.map(({ parent, to }) => {
    const from = addFunctions(parent).id
    const dest = addFunctions(to).id
    return {
      from,
      to: dest,
    }
  })

  return {
    nodes: Object.values(nodes),
    edges: [...edges],
  }
}
