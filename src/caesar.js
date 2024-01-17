// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

// Define a module for the Caesar shift
caesarModule = function () {

  // Helper function to check if a character is alphabetic
  function isAlphabetic(char) {
    return /^[a-zA-Z]$/.test(char);
  }

  // Main Caesar shift function
  function caesar(input, shift, encode = true) {
    // Check if shift is valid
    if (shift is 0 OR shift is less than -25 OR shift is greater than 25 OR shift is undefined) {
      return false; // Return false if shift is invalid
    }

    // Normalize shift to be within the range -25 to 25
    

    // Convert the input string to an array of characters
    

    // Process each character in the input
    
        
        // Calculate the new character code after shifting
        
        
        // Wrap around the alphabet if needed
        
        
        // Non-alphabetic characters are unchanged
        

    // Join the array of characters, convert to lowercase, and form the final result
    

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
