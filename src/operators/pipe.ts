type AnyFn = (arg: any) => any

type Compose<Fn1 extends AnyFn, Fn2 extends AnyFn> =
    Fn1 extends (a: infer A) => infer B
    ? Fn2 extends (b: B) => infer C
        ? (a: A) => C
        : never
    : never

type Curry<First extends AnyFn, Rest extends AnyFn[]> = 
    Rest extends [infer R, ...infer Rests]
    ? R extends AnyFn
        ? Rests extends AnyFn[]
            ? Compose<First, Curry<R, Rests>>
            : never
        : never
    : First


const pipe = <F extends AnyFn, Fns extends AnyFn[]> (fn: F, ...fns: Fns): Curry<F, Fns> => (initialValue) => {
    return [fn, ...fns].reduce((acc, fn) => {
        return fn(acc);
    }, initialValue)
}

export default pipe;