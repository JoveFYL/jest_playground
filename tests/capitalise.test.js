import capitalise from '../src/capitalise';

it('capitalises first letter', () => {
    expect(capitalise('string')).toBe('String');
});
