import { indexedToString, splitByLength } from "./text";

test('indexed to text' , () => {
    const res = indexedToString([
        {
            value: 'a',
            index: 0
        },
        {
            value: 'b',
            index: 1
        },
        {
            value: 'c',
            index: 2
        },
    ]); 

    expect(res).toBe('abc');
});

test('text length split', () => {
    expect(splitByLength('abcd', 2)).toEqual(['ab', 'cd'])
});