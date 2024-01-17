// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {

  // Helper function to check if a character is alphabetic
  function isAlphabetic(char) {
    return /^[a-zA-Z]$/.test(char);
  };
  
  function caesar(input, shift, encode = true) {
    // Check if shift is valid
    if (shift === 0 || shift < -25 || shift > 25 || shift === undefined) {
      return false;
    }
    
    // Normalize shift to be within the range -25 to 25
    shift = ((shift % 26) + 26) % 26;
    
    // Convert the input string to an array of characters
    const inputArray = input.split('');
    
    // Process each character in the input
    const result = inputArray.map((char) => {
      if (isAlphabetic(char)) {
        const isUpperCase = char === char.toUpperCase();
        const baseCode = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
        
        // Calculate the new character code after shifting
        let newCode = char.charCodeAt(0) + (encode ? shift : -shift);
        
        // Wrap around the alphabet if needed
        if (newCode < baseCode) {
          newCode += 26;
        } else if (newCode > baseCode + 25) {
          newCode -= 26;
        }
        
        return String.fromCharCode(newCode);
      } else {
        // Non-alphabetic characters are unchanged
        return char;
      }
    });
    
    // Join the array of characters, convert to lowercase, and form the final result
    return result.join('').toLowerCase();
  }
  
  return {
    caesar,
  };
})();
module.exports = { caesar: caesarModule.caesar };