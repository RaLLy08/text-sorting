import { IndexedValueType } from '../types';

export interface ISortingAlgorithms {
    bubble: (indexedValues: IndexedValueType[], stepPoint?: BubbleStepPointType) => Array<IndexedValueType[]>,
    selection: (indexedValues: IndexedValueType[], stepPoint?: SelectionStepPointType) => IndexedValueType[],
}

const sortings: ISortingAlgorithms = {
    bubble,
    selection,
}

export type BubbleStepPointType =     
    | 'n'
    | 'n^2'
    | 'n^2&swap';

function bubble(array: Array<IndexedValueType>, stepPoint: BubbleStepPointType = 'n'): Array<IndexedValueType[]> {
    const newState = [...array];
    const toSteps: Array<IndexedValueType[]> = [];

    let swapped;

    while (!swapped) {
        swapped = true;
        for (let i = 0; i < newState.length - 1; i++) {

            if (newState[i + 1].index < newState[i].index) {
                [ newState[i], newState[i + 1] ] = [ newState[i + 1], newState[i] ];
                swapped = false;
                
                if (stepPoint === 'n^2&swap') toSteps.push([...newState]);
            }

            if (stepPoint === 'n^2') toSteps.push([...newState]);
        }

        if (stepPoint === 'n') toSteps.push([...newState]);
    }

    return toSteps;
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