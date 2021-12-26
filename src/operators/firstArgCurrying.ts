export const firstArgCurrying =
    <F extends (first: any, ...rest: any[]) => any>(fn: F) =>
    (...rest: Rest<Parameters<F>>) => (first: Parameters<F>[0]): ReturnType<F> => fn(first ,...rest);


type Rest<Args extends any[]> =
    Args extends [any, ...infer Rest]
    ? Rest
    : never



