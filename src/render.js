import { createRootElement } from './create-element'

const renderText = (text, container) => {
    const textNode = document.createTextNode(text)
    container.appendChild(textNode)
}

const renderElement = (element, container) => {
    const domElement = document.createElement(element.tag)
    if (element.props) {
        Object.keys(element.props)
            .filter((p) => (p !== 'children'))
            .forEach((p) => (domElement[p] = element.props[p]))
    }
    if (element.props.children) {
        element.props.children
            .forEach((child) => render(child, domElement))
    }
    container.appendChild(domElement)
}

let rootContainer = null

export const render = (object, container) => {
    if (rootContainer === null) {
        rootContainer = container
    }
    if (['string', 'number'].includes(typeof (object))) {
        renderText(object, container)
    } else {
        renderElement(object, container)
    }
}

export const rerender = () => {
    rootContainer.firstChild.remove()
    render(createRootElement(), rootContainer)
}
