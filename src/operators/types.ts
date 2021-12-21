export type OperatorClosuredType<T, A> = (arg: T) => A;
export type OperatorType<T, A, B> = (arg?: T) => OperatorClosuredType<A, B>; // external arg, internalinternal arg, internal return type;

/// must be deleted