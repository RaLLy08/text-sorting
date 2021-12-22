export const firstArgCurrying = <F, T extends any[]>(fn: any) => {
    return function(...rest: T) {
        return function(firstArg: F) {
            return fn(firstArg, ...rest)
        }
    }
}