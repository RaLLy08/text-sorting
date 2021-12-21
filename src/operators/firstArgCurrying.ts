import { OperatorType } from './types';

// export const operator: OperatorType<A, B, C> () => {}

export const firstArgCurrying = <F, T extends any[]>(fn: any) => {
    return function(...rest: T) {
        return function(firstArg: F) {
            return fn(...rest, firstArg)
        }
    }
}