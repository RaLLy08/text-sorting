import { getRandomKey } from '../../utils/random';
import { firstArgCurrying } from './../../operators/firstArgCurrying';
import { IndexedValueType } from '../types';
import { bubble, selection, SortingGeneratorInterface, StepPointType } from './sortAlgorithms';

type SortTypes = 'bubble' | 'selection'
type SortTypesProp = SortTypes | 'random';

// !stepPoint not the same for all algs 
const sortings: Record<SortTypes, (indexedValues: IndexedValueType[], stepPoint: StepPointType) => SortingGeneratorInterface> = {
    bubble,
    selection,
}

const sortIndexed = (indexedValues: IndexedValueType[], type: SortTypesProp = 'random') => {
    if (type === 'random') {
        const randomSortingName = getRandomKey(sortings);
            
        return sortings[randomSortingName](indexedValues)
    }

    return sortings[type](indexedValues)
}

export default firstArgCurrying<IndexedValueType[], [SortTypesProp?]>(sortIndexed);