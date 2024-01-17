// Write your tests here!
const { caesar } = require('../src/caesar');

describe('caesar', () => {
    it('should return false if the shift value is equal to 0, less than -25, greater than 25, or not present', () => {
    expect(caesar('A Message', 0)).toBe(false);
    expect(caesar('A Message', -26)).toBe(false);
    expect(caesar('A Message', 26)).toBe(false);
    expect(caesar('A Message')).toBe(false);
    });
    
    it('should ignore capital letters', () => {
    expect(caesar('A Message', 3)).toBe(caesar('a message', 3));
    });
    
    it('should handle shifts that go past the end of the alphabet when encoding', () => {
    expect(caesar('Zebra Magazine', 3)).toBe('cheud pdjdclqh');
    });
    
    it('should maintain spaces and other nonalphabetic symbols', () => {
    expect(caesar('A Message!', 3)).toBe('d phvvdjh!');
    expect(caesar('A Message!', -3)).toBe('x jxuuxjx!');
    });
    
    it('should handle shifts that go past the start of the alphabet when decoding', () => {
    expect(caesar('cheud pdjdclqh', -3, false)).toBe('zebra magazine');
    });
    
    it('should return false for invalid shift values', () => {
    expect(caesar('A Message', 99)).toBe(false);
    expect(caesar('A Message', -99)).toBe(false);
    });
});