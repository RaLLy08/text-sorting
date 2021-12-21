import textTodIndexed from "./textToIndexed"

test('should convert text into indexed value', () => {
    expect(textTodIndexed()('abc')).toEqual([
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

test('should split text by 2', () => {
    expect(textTodIndexed((_, i) => {
        return (i + 1) % 2;
    })('abcd')).toEqual([
        {
            value: 'ab',
            index: 0
        },
        {
            value: 'cd',
            index: 1
        }
    ])
})

test('should split text by value', () => {
    expect(textTodIndexed((value) => {
        return value === 'ab';
    })('abcd')).toEqual([
        {
            value: 'ab',
            index: 0
        },
        {
            value: 'cd',
            index: 1
        }
    ])
})