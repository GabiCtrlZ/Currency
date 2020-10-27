const v1 = (num, w, h, x, y) => {
  const isEven = !(num % 2)
  const empty = isEven ? new Array(num / 2).fill(0) : new Array((num + 1) / 2).fill(0)
  const second = []

  const first = empty.map((_, i) => {
    if (!i) {
      second.push({
        x: Math.floor(x - (w * 2)),
        y: Math.floor(y / 2) - h,
      })
      return {
        x: 0,
        y: Math.floor(y / 2) - h,
      }
    }
    const xValue = (x - (2 * w)) / empty.length
    second.push({
      x: Math.floor(xValue * (empty.length - i)),
      y: Math.floor(y / 4) - h,
    })
    return {
      x: Math.floor(xValue * i),
      y: Math.floor((y * 3) / 4) - h,
    }
  })

  if (!isEven) second.shift()

  return [...first, ...second]
}

const v2 = (num, w, h, x, y) => {
  const isEven = !(num % 2)
  const empty = isEven ? new Array(num / 2).fill(0) : new Array((num + 1) / 2).fill(0)
  const second = []

  const first = empty.map((_, i) => {
    // handle first element
    if (!i) {
      second.push({
        x: Math.floor(x - (w * 2)),
        y: Math.floor(y / 2) - h,
      })
      return {
        x: 0,
        y: Math.floor(y / 2) - h,
      }
    }

    // handle rest of elements
    const xValue = (x - (2 * w)) / (Math.ceil(empty.length / 2))

    // need to handle for both i even and uneven
    const addY = !(i % 2) ? -2 * h : 2 * h
    const addX = !(i % 2) ? 0 : xValue / 2
    second.push({
      x: Math.floor(xValue * (Math.ceil(empty.length / 2) - Math.ceil(i / 2))) + addX,
      y: Math.floor(y / 4) - h + addY,
    })
    return {
      x: Math.floor(xValue * Math.ceil(i / 2)) - addX,
      y: Math.floor((y * 3) / 4) - h + addY,
    }
  })

  if (!isEven) second.shift()

  return [...first, ...second]
}

module.exports = (num, w, h, x, y) => {
  if (num > 16) return v2(num, w, h, x, y)
  return v1(num, w, h, x, y)
}
