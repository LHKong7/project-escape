export const getAllProperties = (domEl, props = []) => {
    domEl.__proto__
        ?
        getAllProperties(domEl.__proto__, props.concat(Object.getOwnPropertyNames(domEl)))
        : 
        [...new Set((props.concat(Object.getOwnPropertyNames(domEl))))];
}

