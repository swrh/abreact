export const createElement = (object, props, ...children) => {
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
