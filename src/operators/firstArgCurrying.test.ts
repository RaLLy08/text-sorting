import { firstArgCurrying } from './firstArgCurrying';

test('should move first arggument to second call', () => {
    const fn = (a: number, b: number, c: number): boolean => {
        if (a === b + c) return true

        return false;
    }

    const curried = firstArgCurrying(fn);

    expect(fn(3, 2, 1)).toBe(curried(2, 1)(3))
})