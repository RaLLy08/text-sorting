import { IndexedValueType, MiddlewareType } from './../types';

type splitFnType = (value: string, index: number, str: string) => boolean | number; 


const textToIndexed: MiddlewareType<splitFnType, string, IndexedValueType[]> = (splitFn = () => true) => {
    
    return (str) => {
        class Indexed implements IndexedValueType {
            constructor(public value: string, public index: number) {}
        }
        let indexed = new Indexed(str[0], 0);
        const chunks = [indexed]
    
        for (let i = 1; i < str.length; i++) {
            if (splitFn(indexed.value, i, str)) {
                indexed = new Indexed(str[i], indexed.index + 1);
    
                chunks.push(indexed);
    
                continue;
            } 
            indexed.value += str[i];
        }
    
        return chunks;
    }
}

export default textToIndexed;