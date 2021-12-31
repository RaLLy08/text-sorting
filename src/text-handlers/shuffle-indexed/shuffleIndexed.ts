import { firstArgCurrying } from '../../operators/firstArgCurrying';
import { IndexedValueType } from '../../types';
import { getRandomKey } from '../../utils/random';

type ShuffleTypes = 'no_order' | 'reverse';

type ShuffleTypesProp = ShuffleTypes | 'random';

const shuffles: Record<ShuffleTypes, (indexedValues: IndexedValueType[]) => IndexedValueType[]> = {
    no_order: (indexedValues) => {
        const newState = [...indexedValues];

        newState.sort(() => Math.random() - 0.5);

        return newState;
    },
    reverse: (indexedValues) => {
        const newState = [...indexedValues];

        newState.reverse();

        return newState;
    }
    // .. expand here
}

const shuffleIndexed = (indexedValues: IndexedValueType[], type: ShuffleTypesProp = 'random') => {
    if (type === 'random') {
        const randomShuffleName = getRandomKey(shuffles);
        
        return shuffles[randomShuffleName](indexedValues)
    }

    return shuffles[type](indexedValues)
}

export default firstArgCurrying(shuffleIndexed);