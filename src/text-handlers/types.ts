export type OperatorClosuredType<T, A> = (arg: T) => A;
export type OperatorType<T, A, B> = (arg?: T) => OperatorClosuredType<A, B>; // external arg, internalinternal arg, internal return type;
export type PipeType = (...fns: any[]) => (initialValue?: any) => any;
export type IndexedValueType = {
    value: string,
    index: number
}
