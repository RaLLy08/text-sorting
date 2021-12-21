import { getRandomKey } from 'utils/random';
import { OperatorType } from '../../operators/types'; // must be removed
import { IndexedValueType } from '../types';

type SortTypes = 'bubble'

const sortings: Record<SortTypes, (indexedValues: IndexedValueType[]) => IndexedValueType[]> = {
    bubble: (indevedValues) => {
        return indevedValues;
    }
}

const sortIndexed: OperatorType<SortTypes | 'random', IndexedValueType[], IndexedValueType[]> = (type = 'random') => {
    
    return (indexedValues) => {
        if (type === 'random') {
            const randomSortingName = getRandomKey(sortings);
            
            return sortings[randomSortingName](indexedValues)
        }

        return sortings[type](indexedValues)
    }
}