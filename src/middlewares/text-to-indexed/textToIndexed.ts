import { IndexedValueType } from './../types';

const textToFrames = (str: string): IndexedValueType[] => {
    return Array.from(str, (value, index) => ({
        value,
        index
    }))
}

export default textToFrames;