import shuffleIndexed from "./shuffleIndexed"

test('should reverse indexed values', () => {
    const enterValue = [
        {
            value: 'a',
            index: 0,
        },
        {
            value: 'b',
            index: 1,
        },
        {
            value: 'c',
            index: 2,
        },
        {
            value: 'd',
            index: 3,
        },
    ];
    const expectValue = [
        {
            value: 'd',
            index: 3,
        },
        {
            value: 'c',
            index: 2,
        },
        {
            value: 'b',
            index: 1,
        },
        {
            value: 'a',
            index: 0,
        },
    ];

    expect(shuffleIndexed('reverse')(enterValue)).toEqual(expectValue);
})