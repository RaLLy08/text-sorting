import { getRandomKey } from '../../utils/random';
import sortings from './stepsSortAlgorithms';

type SortTypesProp = keyof typeof sortings | 'random';

const stepSortIndexed = (type: SortTypesProp = 'random') => {

    if (type === 'random') {
        const randomSortingName = getRandomKey(sortings);
            
        return sortings[randomSortingName]
    }

    return sortings[type]
}


export default stepSortIndexed;
