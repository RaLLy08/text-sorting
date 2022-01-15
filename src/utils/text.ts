import { IndexedValueType } from '../types';


export const indexedToString = (indexedValues: IndexedValueType[]): string => 
    indexedValues.map(el => el.value).join('')

export const splitByLength = (str: string, length: number | string): string[] => {
    if (str.length < length) length = str.length

    const result = str.match(new RegExp('.{1,' + length + '}', 'g')) as string[];

    return result;
}