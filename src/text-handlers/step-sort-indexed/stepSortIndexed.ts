import { getRandomKey } from '../../utils/random';
import { firstArgCurrying } from '../../operators/firstArgCurrying';
import { IndexedValueType } from '../types';
import sortings from './stepsSortAlgorithms';

type SortTypesProp = keyof typeof sortings | 'random';

const stepSortIndexed = (indexedValues: IndexedValueType[], type: SortTypesProp = 'random') => {

    if (type === 'random') {
        const randomSortingName = getRandomKey(sortings);
            
        return sortings[randomSortingName](indexedValues)
    }

    return sortings[type](indexedValues)
}


export default firstArgCurrying(stepSortIndexed);