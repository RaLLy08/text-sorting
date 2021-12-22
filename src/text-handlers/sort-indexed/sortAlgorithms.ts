import { IndexedValueType } from '../types';

export interface SortingGeneratorInterface<T = Array<IndexedValueType>, TReturn = Array<IndexedValueType>, TNext = Array<IndexedValueType>> extends Iterator<T, TReturn, TNext> {
    next(...args: [] | [TNext]): IteratorResult<T, TReturn>;
    return(value: TReturn): IteratorResult<T, TReturn>;
    throw(e: any): IteratorResult<T, TReturn>;
    [Symbol.iterator](): Generator<T, TReturn, TNext>;
}

export type StepPointType = 
    | 'n'
    | 'n^2'
    | 'n^2&swap';


export type BubbleStepPointType = StepPointType;

export function* bubble(array: Array<IndexedValueType>, stepPoint: BubbleStepPointType = 'n'): SortingGeneratorInterface {
    const newState = [...array];
    let swapped;

    while (!swapped) {
        swapped = true;
        for (let i = 0; i < newState.length - 1; i++) {

            if (newState[i + 1].index < newState[i].index) {
                [ newState[i], newState[i + 1] ] = [ newState[i + 1], newState[i] ];
                swapped = false;
                
                if (stepPoint === 'n^2&swap') yield [...newState];
            }

            if (stepPoint === 'n^2') yield [...newState];
        }

        if (stepPoint === 'n') yield [...newState];
    }

    return newState;
}

export type SelectionStepPointType = StepPointType;

export function* selection(array: Array<IndexedValueType>, stepPoint: SelectionStepPointType = 'n'): SortingGeneratorInterface {
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