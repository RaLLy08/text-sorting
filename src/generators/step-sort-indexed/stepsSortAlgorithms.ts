import { IndexedValueType } from '../../types';

export interface SortingAlgorithms {
    bubble: (indexes: IndexedValueType[], stepPoint?: BubbleStepPointType) => SortingGenerator,
    // selection: (indexes: IndexedValueType[], stepPoint?: SelectionStepPointType) => IndexedValueType[],
}

interface SortingGenerator<T = IndexedValueType[], TReturn = IndexedValueType[], TNext = IndexedValueType[]> extends Iterator<T, TReturn, TNext> {
    next(...args: [] | [TNext]): IteratorResult<T, TReturn>;
    return(value: TReturn): IteratorResult<T, TReturn>;
    throw(e: any): IteratorResult<T, TReturn>;
    [Symbol.iterator](): Generator<T, TReturn, TNext>;
}

const sortings: SortingAlgorithms = {
    bubble,
    // selection,
}

export type BubbleStepPointType =     
    | 'n'
    | 'n^2'
    | 'n^2&swap';

function* bubble(array: IndexedValueType[], stepPoint: BubbleStepPointType = 'n'): SortingGenerator {
    const currentState = [...array];
    let swapped;

    while (!swapped) {
        swapped = true;
        for (let i = 0; i < currentState.length - 1; i++) {

            if (currentState[i + 1].index < currentState[i].index) {
                [ currentState[i], currentState[i + 1] ] = [ currentState[i + 1], currentState[i] ];
                swapped = false;
                
                if (stepPoint === 'n^2&swap') yield [...currentState];
            }

            if (stepPoint === 'n^2') yield [...currentState];
        }

        if (stepPoint === 'n') yield [...currentState];
    }

    return currentState;
}

export type SelectionStepPointType = 
    | 'n'
    | 'n^2'
    | 'n^2&swap';

function* selection(array: Array<IndexedValueType>, stepPoint: SelectionStepPointType = 'n'): IndexedValueType[] {
    const newState = [...array];

    for (let i = 0; i < newState.length; i++) {
        for (let j = i + 1; j < newState.length; j++) {
            if (newState[j].index < newState[i].index) {
                
                [ newState[j], newState[i] ] = [ newState[i], newState[j] ];
                
                if (stepPoint === 'n^2&swap') yield [...newState];
            }

            if (stepPoint === 'n^2') yield [...newState];
        }
        if (stepPoint === 'n') yield [...newState];
    }
    return newState;
}

export default sortings;