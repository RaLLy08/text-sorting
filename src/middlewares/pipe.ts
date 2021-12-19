const pipe = (...fns) => (initialValue?: any) => {
    return fns.reduce((acc, fn) => {
        
        return fn(acc);
    }, initialValue)
}

export default pipe;