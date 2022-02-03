/**
 * @jest-environment jsdom
 */

import { test } from '@jest/globals'
import { createElement } from './create-element'
import { render } from './render'

test('runs', () => {
    const div = document.createElement('div')
    render(createElement(null, null), div)
})
