import { IndexedValueType } from '../types';


export const indexedToString = (indexedValues: IndexedValueType[]): string => 
    indexedValues.map(el => el.value).join('')