import { OperatorClosuredType } from '../types';
import { getRandomValue } from "utils/random";
import pipe from "./pipe";

describe('pipe operator', () => {
    test('should call 0-50 passed functions ', () => {
        const mockFn = jest.fn(() => {})
        const randomLength = getRandomValue(50);
        const randomMockFunctions = Array.from({ length: randomLength}, () => mockFn)

        pipe(
            ...randomMockFunctions
        )();

        expect(mockFn.mock.calls.length).toBe(randomLength);
    })
    
    test('operators should transfer value from first to end and will give last as result', () => { 
        const operatorClosured: OperatorClosuredType<string, string> = (arg) => arg;
        const initialValue = 'mock';

        const result = pipe(
            operatorClosured,
            operatorClosured,
            operatorClosured,
        )(initialValue);

        expect(result).toBe(initialValue);
    });
})