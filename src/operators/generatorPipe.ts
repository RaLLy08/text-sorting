import { IndexedValueType } from './../types';

interface GeneratorSuspended<T = IndexedValueType[], TReturn = IndexedValueType[], TNext = IndexedValueType[]> extends Iterator<T, TReturn, TNext> {
    next(...args: [] | [TNext]): IteratorResult<T, TReturn>;
    return(value: TReturn): IteratorResult<T, TReturn>;
    throw(e: any): IteratorResult<T, TReturn>;
    [Symbol.iterator](): GeneratorSuspended<T, TReturn, TNext>;
}

type Generator = (initialValue: IndexedValueType[]) => GeneratorSuspended

const generatorPipe = (...generators: Generator[]) => function* (initialValue: IndexedValueType[]) {
    yield initialValue;
    let currentInitGenValue = initialValue;

    for (const generator of generators) {
        currentInitGenValue = yield* generator(currentInitGenValue);
    }
}

export default generatorPipe;
