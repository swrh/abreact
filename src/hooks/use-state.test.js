import { beforeEach, expect } from '@jest/globals'
import { getCounter, resetCounters } from '../render'
import { useState } from './use-state'

jest.mock('../render')

describe('useState', () => {
    beforeEach(() => {
        // Reset all states to undefined
        const [_, resetCursor] = useState({})
        resetCursor({})
        const states = [...Array(3)].map(() => useState({}))
        states.forEach(([state, setState]) => setState(undefined))

        resetCounters()
    })

    test('returns state and setter', () => {
        const [stateNumber, setStateNumber] = useState(123)
        expect(typeof (stateNumber)).toBe('number')
        expect(typeof (setStateNumber)).toBe('function')

        const [stateString, setStateString] = useState('foobar')
        expect(typeof (stateString)).toBe('string')
        expect(typeof (setStateString)).toBe('function')
    })

    test('returns intial state', () => {
        const [a, setA] = useState('foo')
        expect(a).toBe('foo')

        const [b, setB] = useState('bar')
        expect(b).toBe('bar')

        expect(a).toBe('foo')
    })

    test('setter rerenders', () => {
        const [state, setState] = useState('foo')
        expect(state).toBe('foo')

        expect(getCounter('rerender')).toBe(0)
        setState('bar')
        expect(getCounter('rerender')).toBe(1)
        setState('bar')
        expect(getCounter('rerender')).toBe(1)
        setState('foo')
        expect(getCounter('rerender')).toBe(2)
    })

    test('setter changes the current state', () => {
        let [a, setA] = useState('foo')
        let [b, setB] = useState('bar')
        expect(a).toBe('foo')
        expect(b).toBe('bar')

        // For some unknown reason code is breaking loose right here. Maybe it
        // is a bug in Jest or in some other third party library.
        setA('a')

        [a, setA] = useState('foo')
        [b, setB] = useState('bar')
        expect(a).toBe('a')
        expect(b).toBe('bar')

        setB('b')

        [a, setA] = useState('foo')
        [b, setB] = useState('bar')
        expect(a).toBe('a')
        expect(b).toBe('b')
    })
})
