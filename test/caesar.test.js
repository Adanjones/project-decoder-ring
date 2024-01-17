// Write your tests here!
const { caesar } = require('../src/caesar');
// Define tests for the caesar function
describe('caesar', () => {
    
    // Test case: Check if the caesar function handles invalid shift values
    it('should return false if the shift value is equal to 0, less than -25, greater than 25, or not present', function () {
        // Assertions for various invalid shift values
        expect(caesar('A Message', 0)).toBe(false);
        expect(caesar('A Message', -26)).toBe(false);
        expect(caesar('A Message', 26)).toBe(false);
        expect(caesar('A Message')).toBe(false);
      });
    
      // Test case: Check if the caesar function ignores capital letters
      it('should ignore capital letters', function () {
        // Assertion to compare results with different capitalizations
        expect(caesar('A Message', 3)).toBe(caesar('a message', 3));
      });
    
      // Test case: Check if the caesar function handles shifts that go past the end of the alphabet when encoding
      it('should handle shifts that go past the end of the alphabet when encoding', function () {
        // Assertion to check encoding result with a specific shift
        expect(caesar('Zebra Magazine', 3)).toBe('cheud pdjdclqh');
      });
    
      // Test case: Check if the caesar function maintains spaces and other nonalphabetic symbols
      it('should maintain spaces and other nonalphabetic symbols', function () {
        // Assertions for maintaining symbols before and after encoding or decoding
        expect(caesar('A Message!', 3)).toBe('d phvvdjh!');
        expect(caesar('A Message!', -3)).toBe('x jxuuxjx!');
      });
    
      // Test case: Check if the caesar function handles shifts that go past the start of the alphabet when decoding
      it('should handle shifts that go past the start of the alphabet when decoding', function () {
        // Assertion to check decoding result with a specific shift
        expect(caesar('cheud pdjdclqh', -3, false)).toBe('zebra magazine');
      });
    
      // Test case: Check if the caesar function returns false for invalid shift values
      it('should return false for invalid shift values', function () {
        // Assertions for additional invalid shift values
        expect(caesar('A Message', 99)).toBe(false);
        expect(caesar('A Message', -99)).toBe(false);
      });
    });