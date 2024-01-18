// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

function caesar(input, shift, encode = true) {
  // Error handling
  if (shift === 0 || shift < -25 || shift > 25) {
    return false;
  }

  // Define the alphabet
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  // Helper function to shift a single character
  function shiftChar(char, shift) {
    const isUpperCase = char === char.toUpperCase();
    char = char.toLowerCase();

    if (alphabet.includes(char)) {
      let newIndex = (alphabet.indexOf(char) + shift) % 26;
      if (newIndex < 0) {
        newIndex += 26;
      }

      const shiftedChar = alphabet[newIndex];

      return isUpperCase ? shiftedChar.toUpperCase() : shiftedChar;
    } else {
      return char;
    }
  }

  // Apply the shift to each character in the input
  const result = input
    .split('')
    .map((char) => shiftChar(char, encode ? shift : -shift))
    .join('').toLowerCase();

  return result;
}

// Export the function for testing
module.exports = { caesar };