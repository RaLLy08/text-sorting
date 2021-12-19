export type MiddlewareClosuredType<T> = (next: (arg?: T) => void) => void;
export type MiddlewareType<T> = (arg?: T) => MiddlewareClosuredType<T>;
export type PipeType = (...fns: MiddlewareClosuredType<any>[]) => (initialValue?: any) => any;
