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

export const render = (object, container) => {
    if (['string', 'number'].includes(typeof (object))) {
        renderText(object, container)
    } else {
        renderElement(object, container)
    }
}
