import { getRandomKey } from '../../utils/random';
import { firstArgCurrying } from './../../operators/firstArgCurrying';
import { IndexedValueType } from '../types';
import sortings from './sortAlgorithms';

type SortTypesProp = keyof typeof sortings | 'random';

type SortIndexedTypes = (indexedValues: IndexedValueType[], type?: SortTypesProp) => IndexedValueType[]

const sortIndexed = (indexedValues: IndexedValueType[], type: SortTypesProp = 'random') => {

    if (type === 'random') {
        const randomSortingName = getRandomKey(sortings);
            
        return sortings[randomSortingName](indexedValues)
    }

    return sortings[type](indexedValues)
}

const stepSorting = () => {

}

export default firstArgCurrying(sortIndexed);