import textTodIndexed from "./textToIndexed"

test('should convert text into indexed value', () => {
    expect(textTodIndexed('abc')).toEqual([
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
    ])
})