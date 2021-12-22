import { getRandomKey } from '../../utils/random';
import { firstArgCurrying } from './../../operators/firstArgCurrying';
import { IndexedValueType } from '../types';

type SortTypes = 'bubble'
type SortTypesProp = SortTypes | 'random';

const sortings: Record<SortTypes, (indexedValues: IndexedValueType[]) => IndexedValueType[]> = {
    bubble: (indevedValues) => {
        return indevedValues;
    }
}

const sortIndexed = (indexedValues: IndexedValueType[], type: SortTypesProp = 'random') => {
    if (type === 'random') {
        const randomSortingName = getRandomKey(sortings);
            
        return sortings[randomSortingName](indexedValues)
    }

    return sortings[type](indexedValues)
}

export default firstArgCurrying<IndexedValueType[], [SortTypesProp?]>(sortIndexed);