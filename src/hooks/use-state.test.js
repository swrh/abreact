import { expect } from '@jest/globals'
import { useState } from './use-state'

test('returns intial state', () => {
    const [state, setState] = useState('foo')
    expect(state).toBe('foo')
})
