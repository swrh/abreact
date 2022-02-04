const render = jest.createMockFromModule('./render')

const initialCounters = {
    rerender: 0,
}
let counters = { ...initialCounters }
render.resetCounters = () => {
    counters = { ...initialCounters }
}

render.getCounter = (type) => {
    return counters[type]
}

render.rerender = () => {
    ++counters.rerender
}

module.exports = render
