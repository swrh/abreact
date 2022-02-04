import { rerender } from '../render'

const state = []
let stateCursor = 0

export const useState = (initialState) => {
    const CURSOR = stateCursor++
    if (state[CURSOR] === undefined) {
        state[CURSOR] = initialState
    }
    const setState = (newState) => {
        if (newState !== state[CURSOR]) {
            state[CURSOR] = newState
            stateCursor = 0
            rerender()
        }
    }
    return [state[CURSOR], setState]
}
