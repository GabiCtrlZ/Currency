const data = {
    'dollar': [
        {
            'to': 'euro',
            'from': 'dollar',
            'bank': 'bank1',
            'weight': 0.84,
        },
        {
            'to': 'nis',
            'from': 'dollar',
            'bank': 'bank2',
            'weight': 3.38,
        },
    ],
    'euro': [
        {
            'to': 'nis',
            'from': 'euro',
            'bank': 'bank1',
            'weight': 4,
        },
        {
            'to': 'dollar',
            'from': 'euro',
            'bank': 'bank1',
            'weight': 1.4,
        },
    ],
    'nis': [
        {
            'to': 'euro',
            'from': 'nis',
            'bank': 'bank1',
            'weight': 0.25,
        },
        {
            'to': 'dollar',
            'from': 'nis',
            'bank': 'bank2',
            'weight': 0.3,
        },
    ],
}


const find_cycle = (n, start) => {
    // deep copy nodes
    nodes = { ...n }

    // initializaion of parent and dist dicts
    p = {}
    d = {}

    for (node in nodes) {
        d[node] = -Infinity
        p[node] = []
    }
    d[start] = 1
    p[start] = [{
        parent: start,
    }]

    // edges initialization
    edges = nodes[start]

    // clear nodes[]
    nodes[start] = []

    // starting algorithms
    while (edges.length) {
        edge = edges.pop()
        const { to, from, weight, bank } = edge
        
        if (d[to] < (d[from] * weight)) {
            d[to] = (d[from] * weight)
            p[to].push({
                parent: from,
                bank,
                to,
            })
        }
        edges = [...nodes[to], ...edges]
        nodes[to] = []
    }

    // starting to try and reconstact path
    parent = p[start].pop()

    // return nothing if no path
    if (parent.parent === start) return {
        path: [],
        profit: 0,
    }

    // reconstacting path
    path = [parent]
    while (parent.parent != start) {
        parent = p[parent.parent].pop()
        path.unshift(parent)
    }

    return {
        path,
        profit: Math.floor((d[start] - 1) * 100),
    }
}

// [find_cycle(nodes, item) for item in nodes]
console.log(find_cycle(data, 'dollar'))
