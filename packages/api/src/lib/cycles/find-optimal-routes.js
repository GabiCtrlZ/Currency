module.exports = (cycles, currency, filterByCurrency) => {
  const dp = {}
  return cycles
    .filter(({ path, profit }) => {
      if (filterByCurrency && path[0].parent !== currency) return false
      if (dp[`${profit}: ${path.length}`]) return false
      dp[`${profit}: ${path.length}`] = 1
      return true
    })
    .sort((a, b) => (b.profit / b.path.length) - (a.profit / a.path.length))
}
