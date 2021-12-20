import { MiddlewareClosuredType } from './types';
import getRandomValue from "utils/random";
import pipe from "./pipe";

describe('pipe middleware', () => {
    test('should call 0-50 passed functions ', () => {
        const mockFn = jest.fn(() => {})
        const randomLength = getRandomValue(50);
        const randomMockFunctions = Array.from({ length: randomLength}, () => mockFn)

        pipe(
            ...randomMockFunctions
        )();

        expect(mockFn.mock.calls.length).toBe(randomLength);
    })
    
    test('middlewares should transfer value from first to end and will give last as result', () => { 
        const middlewareClosured: MiddlewareClosuredType<string, string> = (arg) => arg;
        const initialValue = 'mock';

        const result = pipe(
            middlewareClosured,
            middlewareClosured,
            middlewareClosured,
        )(initialValue);

        expect(result).toBe(initialValue);
    });
})