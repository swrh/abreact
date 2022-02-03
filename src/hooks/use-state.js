import { rerender } from '../render'

let state = undefined

export const useState = (initialState) => {
    if (state === undefined) {
        state = initialState
    }
    const setState = (newState) => {
        state = newState
        rerender()
    }
    return [state, setState]
}
