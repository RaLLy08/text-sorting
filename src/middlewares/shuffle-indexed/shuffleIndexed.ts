import { getRandomKey } from '../../utils/random';
import { IndexedValueType, MiddlewareType } from './../types';

type ShuffleTypes = 'no_order' | 'reverse';


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

const shuffleIndexed: MiddlewareType<ShuffleTypes | 'random', IndexedValueType[], IndexedValueType[]> = (type = 'random') => {
    
    return (indexedValues) => {
        if (type === 'random') {
            const randomShuffleName = getRandomKey(shuffles);
            
            return shuffles[randomShuffleName](indexedValues)
        }

        return shuffles[type](indexedValues)
    }
}

export default shuffleIndexed;