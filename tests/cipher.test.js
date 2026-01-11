import cipher from '../src/cipher';

test('cipher', () => {
    expect(cipher('abc', 1)).toBe('bcd');
});

test('cipher', () => {
    expect(cipher('xyz', 3)).toBe('abc');
});

test('cipher', () => {
    expect(cipher('HeLLo', 3)).toBe('KhOOr');
});

test('cipher', () => {
    expect(cipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});
