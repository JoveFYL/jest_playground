import analyseArray from '../src/analyseArray';

it('analyse array', () => {
    expect(analyseArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    });
});

it('analyse array', () => {
    expect(analyseArray([2.5, 7.8, 1.2, 9.9, 4.1])).toEqual({
        average: 5.1,
        min: 1.2,
        max: 9.9,
        length: 5,
    });
});

it('analyse array', () => {
    expect(analyseArray([-5, 10, -3, 8, 0])).toEqual({
        average: 2,
        min: -5,
        max: 10,
        length: 5,
    });
});

it('analyse array', () => {
    expect(analyseArray([42])).toEqual({
        average: 42,
        min: 42,
        max: 42,
        length: 1,
    });
});
