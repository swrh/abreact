import { expect } from '@jest/globals'
import { createElement } from './create-element'

test('returns something', () => {
    expect(createElement(null, null)).not.toBeNull()
})
