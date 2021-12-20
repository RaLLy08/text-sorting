import { IndexedValueType, MiddlewareType } from './../types';

type ShuffleTypes = 'random' | 'reverse';


const shuffles: Record<ShuffleTypes, (indexedValues: IndexedValueType[]) => IndexedValueType[]> = {
    random: (indexedValues) => {
        const newState = [...indexedValues];

        newState.sort(() => Math.random() - 0.5);

        return newState;
    },
    reverse: (indexedValues) => {
        const newState = [...indexedValues];

        newState.reverse();

        return newState;
    } 
}

const shuffleIndexed: MiddlewareType<ShuffleTypes, IndexedValueType[], IndexedValueType[]> = (type = 'random') => {
    
    return (indexedValues) => {

        return shuffles[type](indexedValues)
    }
}

export default shuffleIndexed;