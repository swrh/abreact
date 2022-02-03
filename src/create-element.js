let createRootElementArguments = null

export function createElement(object, props, ...children) {
    if (createRootElementArguments === null) {
        createRootElementArguments = arguments
    }
    if (typeof (object) === 'function') {
        return object(props)
    }
    const element = {
        tag: object,
        props: {
            ...props,
            children,
        },
    }
    return element
}

export const createRootElement = () => {
    return createElement(...createRootElementArguments)
}
