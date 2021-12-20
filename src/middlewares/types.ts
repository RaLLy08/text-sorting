export type MiddlewareClosuredType<T, A> = (arg: T) => A;
export type MiddlewareType<T, A, B> = (arg?: T) => MiddlewareClosuredType<A, B>; // external arg, internalinternal arg, internal return type;
export type PipeType = (...fns: any[]) => (initialValue?: any) => any;
export type IndexedValueType = {
    value: string,
    index: number
}
